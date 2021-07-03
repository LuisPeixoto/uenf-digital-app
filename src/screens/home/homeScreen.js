import React, { useEffect } from 'react';
import Feed from '../../components/feed'
import { useFocusEffect } from '@react-navigation/native';

function Home({navigation}) {
   {
    useFocusEffect( //enable menu gesture
      React.useCallback(() => {
        const parent = navigation.dangerouslyGetParent();
        
        parent.setOptions({ gestureEnabled: true });
    
        return () => parent.setOptions({ gestureEnabled: false });
      }, [navigation])
    );

    return (
        <Feed navigation={navigation} />
    )
  }
}

export default Home;
