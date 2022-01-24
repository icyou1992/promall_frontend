import React, { useState, useEffect, } from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate } from 'react-router'
import { useFirebase } from '../context/FirebaseContext'
import { useEnv } from '../context/EnvContext'
import { SearchBar, ListItem } from '../components'
import { BasicPage } from './util'
import { IsSDevice } from '../util/responsive'
import { getPromotionAPI } from '../util/api';
import { categoryList } from '../constants/Category'
// import { theme } from '../constants/Color'

const SearchPage = (props: any) => {
  const firebase = useFirebase();
  const env = useEnv();
  const navigate = useNavigate();
  const { state }: any = useLocation();
  const [searchByKeyword, setSearchByKeyword] = useState('');
  const [sliced, setSliced] = useState<any>();
  const [events, setEvents] = useState([]);
  const unit = IsSDevice() ? 7 : 3;
  const borderRadius = 8;
  const margin = 8;
  const padding = 8;
  const iconSize = 24;
  const itemSize = 64;
  const labelMargin = 4;
  const paddingTop = 4;
  const headerText = '카테고리';
  
  const styles = {
    container: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'transparent',
      padding: padding,
      borderRadius: borderRadius,
      color: env.fontColor,    
      fontFamily: 'one_main_light',
      marginTop: -margin,
    },
    searchContainer: {
      display: 'flex',
      flex: 1,
      marginLeft: margin*2,
      marginRight: margin*2,
    },
    header: {
      fontSize: '1rem',
      fontFamily: 'one_main_light',
      fontWeight: 'bold',
      letterSpacing: '0.2rem',
      color: env.fontColor,
      marginLeft: margin,
      marginRight: margin,
    },
    category: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
    },
    categoryRow: {
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    item: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      width: itemSize,
      height: itemSize,
      justifyContent: 'center',
      alignItems: 'center',
      textDecoration: 'none',
      color: env.fontColor,
    }, 
    label: {
      marginTop: labelMargin,
      color: env.fontColor,
      fontSize: '0.5rem',
      textAlign: 'center',
      wordBreak: 'keep-all',
    },
    listContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingTop: paddingTop, 
    },
  } as const

  window.history.pushState(null, '', window.location.href)
  window.onpopstate = () => {
    navigate('/', { replace: true })
  }

  const sliceArraybyNumber = (arr: any, n: number) => {
    const len = arr.length;
    const slicedArr = [];
    for(var i = 0; i < len; i += n)
      slicedArr.push(arr.slice(i, i + n))
    
    return slicedArr;
  }

  useEffect(() => {
    setSliced(sliceArraybyNumber(categoryList, unit))
  }, [unit])

  return (
    <BasicPage
      header={
        <>
          <div style={styles.header}>{headerText}</div>
          <div style={styles.searchContainer}>
            <SearchBar value={searchByKeyword} onChange={(e: any) => setSearchByKeyword(e.currentTarget.value)} />
          </div>
        </>
      }
      alarm
      navigation
    >
      <div style={styles.container}>
        {(!state?.category && !state?.keyword) ?
        <>
          {/* <div style={styles.categoryText}>{headerText}</div> */}
          <div style={styles.category}>
            {sliced && sliced.map((categorySet: any, i1: number) => (
              <div key={`category_${i1}`} style={styles.categoryRow}>
                {categorySet.map((item: any, i2: number) => (
                  <div
                    key={item._id + i2} 
                    // to={{ pathname: '/search', search: `?category=${item._id}` }}
                    style={styles.item}
                    onClick={() => { 
                      navigate('/search', { state: { category: item._id } })
                      getPromotionAPI(firebase.db, { 'category': item._id }).then(res => { setEvents(res); 
                    })}}
                  >
                    <item.icon size={iconSize} color={env.fontColor} />
                    <div style={styles.label}>{item.label}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
        :
        <>
          <div style={styles.listContainer}>
            {state?.keyword ?
              <>
                <ListItem>{state.keyword}</ListItem>
                <hr/>
                <ListItem>{state.keyword}</ListItem>
                <hr/>
                <ListItem>{state.keyword}</ListItem>
                <hr/>
                <ListItem>{state.keyword}</ListItem>
                <hr/>
              </>
            :
            (state?.category && 
              <>
                {events.map((event: any, index: number) => (
                  <div key={index}>
                    <ListItem index={index + 1} onClick={() => console.log(state.category)}>{event.title + " " + state.category}</ListItem>
                    <hr/>
                  </div>
                ))}
              </>
            )}
          </div>
        </>
        }
      </div>
    </BasicPage>
  )
}

SearchPage.propTypes = {
  sliced: PropTypes.any,
}

export default SearchPage
