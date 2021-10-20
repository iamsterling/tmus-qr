import React from 'react'
import { Box } from '@chakra-ui/react'
import { Context } from '../../utils/context/data'

export const Logo = () => {
    let DATA = React.useContext(Context)

    if (DATA.org === 'T-Mobile') {
        return <Button>
            <Img h={12} src="./tmo.png" />
        </Button>
    } if (DATA.org === 'Metro') {
        return <Button>
           <Img h={14} src="./metro.png" />
        </Button>
    } return <div>No brand</div>
}


const Button = (props) => {
    let DATA = React.useContext(Context)

    return <Box as='button' 
        onClick={() => DATA.setOrg(DATA.org === 'T-Mobile' ? 'Metro' : 'T-Mobile' )}
        display='flex'
        justifyContent='center'
        alignItems='center'
        bg='transparent'
        border={0}
        h={20} w={20}
        style={{
           
        }}
        {...props} >
        {props.children}
    </Box>
}

const Img = (props) => {
    return <Box as="img"
        overflow='none'
        {...props}>
        {props.children}
    </Box>
}