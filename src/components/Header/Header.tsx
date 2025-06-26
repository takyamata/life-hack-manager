import React from 'react'
import styles from './header.module.scss'
import Wrapper from '@components/Wrapper/Wrapper'
import Text from '@components/Text/Text'
import Button from '@components/Button/Button'

interface HeaderProps {

}
const Header: React.FC<HeaderProps> = ({

}) => {
    return (<>
        <div className={styles.header}>
            <Wrapper display='flex' height='max' flexDirection='row' alignItems='center' justifyContent='space-between' padding='24'>
                <Wrapper display='flex' height='max' flexDirection='column' alignItems='flex-start' justifyContent='center' gap='8'>
                    <Text text='今日のスケジュール' fontSize='32' fontWeight='600' color='white'/>
                    <Text text='１日を効率的に管理しましょう' fontSize='16' fontWeight='600' color='white'/>
                </Wrapper>
                <Wrapper display='flex' height='max' flexDirection='row' alignItems='center' justifyContent='flex-end' gap='12'>
                    <Button width='156' height='48' backgroundColor='white' boxShadow>
                        <Text text='タスク追加' fontSize='16' fontWeight='600' color='blue' />
                    </Button>
                </Wrapper>
            </Wrapper>
        </div>
    </>)
}

export default Header