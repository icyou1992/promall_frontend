import React, { useState, useEffect } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { EmptyPage } from './util'
import { getUser } from '../util/api'
import { IoSettingsSharp } from 'react-icons/io5'
import { bgColor, dark, lavender } from '../constants/Color'
import Logo from '../assets/logo/Logo2'
import { Profile, IconCircle } from '../assets/icon'
import { Button } from '../components'
import Switch from 'react-switch';
import LoginPage from './details/LoginPage'

const ProfilePage = (props: any) => {
  const [profile, setProfile]: any = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remail, setREmail] = useState('');
  const [rpassword, setRPassword] = useState('');
  const [push, setPush] = useState(false);
  const padding = 8;
  const borderRadius = 8;
  const logoSize = 192;
  const iconSize = 48;
  const icons = ['kakaotalk', 'naver', 'google', 'facebook', 'apple'];
  const margin = 8;

  const styles ={  
    header: {
      justifyContent: 'space-between',
      padding: `${padding}px ${padding*2}px ${padding}px ${padding*2}px`,
    },
    headerText: {
      color: lavender,
      fontSize: '1.2rem',
      fontWeight: 'bold',
      letterSpacing: '0.2rem',
    },
    setting: {

    },
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: dark,
      padding: padding*4,
      borderRadius: borderRadius,
      color: lavender,    
    },
    logoContainer: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: padding*2,
      paddingBottom: padding*4,
    },
    contentHeaderContainer: {
      marginTop: margin*2,
      // marginBottom: margin,
    },
    rowContentContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: margin,
      marginBottom: margin,
    },
    icon: {
      margin: margin,
    },
    inputContainer: {
      borderBottom: `1px ${lavender} solid`,
      marginBottom: margin,
    },
    input: {
      display: 'flex', 
      flex: 1,
      backgroundColor: 'transparent',
      paddingLeft: margin/2, 
      marginTop: margin/2,
      fontSize: '1rem', 
      border: 0, 
      outline: 'none',
      color: lavender,
    },
    register: { borderBottom: `1px ${lavender} solid`, fontSize: '0.8rem', alignSelf: 'flex-start', },
    button: {
      borderRadius: borderRadius,
      backgroundColor: bgColor,
      padding: `${padding}px ${padding*2}px ${padding}px ${padding*2}px`,
    },
    profileContainer: {
      display: 'flex',
      flex: 1,
      // justifyContent: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      padding: padding*3,
    },
    profileContentContainer: {
      marginLeft: margin*3,
      fontSize: '1.2rem',
    },
    marketingContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
    }
  } as const

  useEffect(() => {
    // setProfile(getUser())
    setProfile('qwer')
  }, [])

  if(!profile) return <Navigate to='/login'/>;
  return (
    <EmptyPage 
      header={
        <>
          <div style={styles.headerText}>내 정보</div>
          <Link style={styles.setting} to={'/setting'}>
            <IoSettingsSharp color={lavender} size={24} />
          </Link>
        </>
      }
      headerStyle={styles.header}
      navigation
    >
      {/* <div style={styles.container}>
        <div style={styles.profileContainer}>
          <Profile size={iconSize} color={lavender}/>
          <div style={styles.profileContentContainer}>
            <div>이름</div>
            <div>이메일</div>
          </div>
        </div>
        <div style={{ height: 2, backgroundColor: bgColor, margin: -8, marginTop: 0, marginBottom: 12, }} />
        <div>전화번호</div>
        <div>전화번호 인증</div>

        <div style={{ height: 2, backgroundColor: bgColor, margin: -8, marginTop: 12, marginBottom: 12, }} />
        <div style={styles.marketingContainer}>

        <div>푸시알림 동의</div>
        <Switch onChange={() => setPush(!push)} checked={push}>

        </Switch>
        </div>
        <div>SMS 동의</div>


        <h3>Register User</h3>
        <input placeholder="Email.." value={email} onChange={(e) => setREmail(e.target.value)}/>
        <input placeholder="Password.." value={password} onChange={(e) => setRPassword(e.target.value)}/>

        <button> Create User </button>
        <div>
          <h3>Login</h3>
          <input placeholder="Email.." value={remail} onChange={(e) => setEmail(e.target.value)}/>
          <input placeholder="Password.." value={rpassword} onChange={(e) => setPassword(e.target.value)}/>

          <button> Login </button>
        </div>
      </div> */}
    </EmptyPage>
  )
}

export default ProfilePage