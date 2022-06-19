import React from 'react'
import styled from 'styled-components'
import { AuthorsArr} from '../utils/constants'
import Raiting from './Raiting'

interface Props{
    authorId?: number 
}
interface AvaProps{
    image: string
}

const Bar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17%;
`
const Ava = styled.div <AvaProps>(({ image }) =>`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url(${image});
`);
const AuthorName = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
`
const Text = styled.div`
    text-align: center;
    font-size: 0.8em;
    font-family: 'Montserrat', sans-serif;
`
const AuthorBar: React.FC<Props> = ({authorId}) => {
const authorIndex = AuthorsArr.findIndex(a=> a.id === authorId )
const author = AuthorsArr[authorIndex];
  return (
    <Bar>
        <Ava image ={author.image}/>
        <AuthorName>{author.FirstName} {author.LastName}</AuthorName>
        <Raiting rating={author.rating}/>
        <Text>{author.text}</Text>
    </Bar>
  )
}

export default AuthorBar