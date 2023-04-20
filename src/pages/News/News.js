import React from 'react';
import {FlatList, View} from 'react-native';

import useFetch from '../../hooks/useFetch/useFetch';
import NewsCard from '../../components/NewsCard/NewsCard';

import Loading from '../../components/Loading/Loading';
import Error from '../../components/Error/Error';

import styles from './News.style';

const News = ({route, navigation}) => {
    const {category} = route.params
    const {data, loading,error} = useFetch('https://newsapi.org/v2/top-headlines?country=us&category=' + category + '&apiKey=bb0f7f7aabdf4b80bd8b2022a75e8295');
    
    const NewsOnSelect = (description,urlToImage,content, url) => navigation.navigate('DetailPage', {description, urlToImage, content, url});
    const renderNews = ({item}) => <NewsCard newsProp={item} onSelect={() => NewsOnSelect(item.description, item.urlToImage, item.content, item.url)}/>
   
    if (loading){
        return <Loading />
    }
    if (error) {
        return <Error />
    }
    return(
        <View style={styles.container}>
            <FlatList data={data.articles} renderItem={renderNews}/>
        </View>
    )
}
export default News;
