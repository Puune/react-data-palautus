import React,{ useState, useEffect, useCallback } from 'react'
import Header from 'Components/filler/header'
import BikesItem from 'Components/ass4/bikesItem'
import {ListGroup, Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


import { getNetwork } from 'Services/bikeService'

const HslViewer = () => {

    const [content, setContent] = useState(getNetwork());
    const [page, setPage] = useState({items: [], number: 0});

    useEffect(() => {
        async function fetch(){
            const response = await getNetwork();
            setContent(response.stations)
        }
        fetch();
    }, [])

    useEffect(() => {
        if(Array.isArray(content)){
           setPage({items: content, number: page.number})
        }
    }, [content])

    const present = () => {
        if (Promise.resolve(content) == content){
            return(
                <div>
                    Loading bikestops...
                </div>
            )
        } else if(!page){
            return(
                <div>
                    Loading bikestops...
                </div>
            )
        } else {
            const components = page.items.slice(page.number*10, page.number*10+10).map(e => {
                return <BikesItem key={e.id} props={e} />
            })
            return (
                components
            )
        }
    } 

    const switchPage = (num) => {
        const newNum = page.number + num
        setPage({items: page.items, number: newNum})
    }

    const sortList = () => {
        const newList = [...page.items]
        newList.sort(function(a,b){
            var aName = a.name.toUpperCase();
            var bName = b.name.toUpperCase();
            console.log(a.name, b.name);
            return aName < bName ? -1 : aName > bName ? 1 : 0
        })
        setPage({ items: newList, number: 0 })
    }

    return(
        <div>
            <Header title="Teht 4" subtitle="Alepafillari-selain" style={header}/>
            <SearchForm content={content} page={page} setPage={setPage} />
            <ListGroup key={page}>
                {present()}
            </ListGroup>
            <p>Page: {page.number+1}</p>
            <Button style={button} onClick={() => switchPage(-1)}>previous</Button>
            <Button style={button} onClick={() => switchPage(1)}>next</Button>
            <Button style={button} onClick={() => sortList()}>sort</Button>
        </div>
    )
}

const SearchForm = ({content, page, setPage}) => {

    const update = (param) => {
        const resultSet = content.filter(item => {
            let target = item.name.toLowerCase();
            return target.includes(param.toLowerCase());
        })

        setPage({items: resultSet, number: 0})
    }

    return (
        <Form>
            <Form.Label>
                Search
                <Form.Control
                    type='name'
                    placeholder="Paikannimi"
                    onChange={(s) => update(s.target.value)}
                ></Form.Control>
            </Form.Label>
        </Form>
    )
}

export default HslViewer


const button = {
    marginRight: '6px',
    minWidth: '40px'
}

const header = {
    margin: '25px 10px 25px 10px',
    alignContent: 'center',
    alignTtems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
}