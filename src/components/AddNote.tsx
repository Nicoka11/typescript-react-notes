import { FC } from 'react';
import styled from 'styled-components'

interface Props {
    primary?: boolean,
}

const AddNote: FC<Props> = (props) => {

    const AddNote = styled.div`
    width: 100px;
    height: 30px;
    background-color: ${props.primary ? 'red' : 'violet'}
    border-radius: 10px;
    `
    
    return (
        <AddNote>First Button</AddNote>
    )
}

export default AddNote
