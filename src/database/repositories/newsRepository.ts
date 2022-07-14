import firestore from '@react-native-firebase/firestore';
import { NewsProps } from '../Interfaces';

export function getNews({
  lastVisible,
  limit,
  category,
}: {
  lastVisible: string | [];
  limit: number;
  category: string;
}) {
  const operator = category !== '' ? '==' : '!=';
  return (
    firestore()
      .collection('news')
      .where('categories', '==', 'Editais')
      // .orderBy('categories', 'asc')
      .orderBy('date', 'desc')
      .startAfter(lastVisible)
      .limit(limit)
      .get()
      .then(news => {
        const data = news.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        return data as NewsProps[];
      })
      .catch(error => {
        throw new Error(error);
      })
  );
}

// const handleCategory = (category: string) => {
//   setCategorySelected(category);
//   setcurrentPage(1);
// };

// function loadData() {
//   firestore()
//     .collection('news')
//     .get()
//     .then(res => {
//       const news = res.docs.map(doc => {
//         return {
//           id: doc.id,
//           ...doc.data(),
//         };
//       });
//       setData(news);
//     });

export function searchNews({
  search,
  page,
  limit,
}: {
  search: string;
  page: number;
  limit: number;
}) {
  return firestore().collection('news').where('title', '==', search).get();
}
