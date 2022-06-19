import React from 'react'
import styled from 'styled-components'
import SvgStar from '../iconComponents/Star'

interface Props{
    rating: number
}
interface StarProps{
    fill?: string
}

const Star = styled(SvgStar)<StarProps>(({ fill }) =>`
fill: ${fill ?? 'none'};
color: #EA468059;
`);
const StarsBand = styled.div`
    padding: 0 10%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`
const StarsArr = [1, 2, 3 , 4 , 5];
const Raiting: React.FC<Props> = ({rating}) => {
  return (
    <StarsBand>
        {StarsArr.map((s, index) => {
            if(index===0&&rating>10||
               index===1&&rating>30||
               index===2&&rating>50||
               index===3&&rating>70||
               index===4&&rating>90
               ) return <Star key={index} fill='#EA4680'/>
        return <Star key={index}/>})}
    </StarsBand>
  )
}

export default Raiting