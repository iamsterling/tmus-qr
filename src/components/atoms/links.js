import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { Context } from '../../utils/context/data'

import { FaGithubAlt } from 'react-icons/fa'

export const Links = (props) => {
  let DATA = React.useContext(Context)
  
    return <Flex 
        flexDirection="row"
        justifyContent='space-between'
        alignItems='center'
        style={{
            //backgroundColor: 'pink',
            width: '100%',
        }}
        >
         <Tabs DATA={DATA}/>

        <Box as='a' href="https://github.com/jsterlingholt/tmus-qr" fontSize='24'>
          <FaGithubAlt/>
        </Box>
    </Flex>
}



const Tabs = (props) => {
  let DATA = props.DATA
    let tabs = [
        {
          name: 'contact'
        },
        {
          name: 'wifi',
        },
        {
          name: 'uri',
        }
    ]


    return <Box as="ul"
        m={0} p={0}
        display='inline-flex'
        >
          {tabs.map(item => {
            let {name} = item
            
            const action = () => {
              DATA.setActiveTab(name)
            }

            return(
              <li 
                key={name}
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  //backgroundColor: 'pink',
                  height: '100%',
                  marginRight: 16,
                }}>

                <button
                  style={{
                    height: 50-2,
                    backgroundColor: 'transparent', border: 0,
                    fontWeight: DATA.activeTab === name ? 'bold' : 'normal',
                    textTransform: 'uppercase',
                    color: DATA.activeTab === name ? DATA.primary : 'rgba(0,0,0,0.4)',
                  }}
                  onClick={action}>
                  {name}
                </button>

                <div style={{
                  width: '100%',
                  height: 2,
                  backgroundColor: DATA.activeTab === name ? DATA.primary : 'transparent',
                }}/>
              </li>
            )
          })}
        </Box>
  }



/*

  */