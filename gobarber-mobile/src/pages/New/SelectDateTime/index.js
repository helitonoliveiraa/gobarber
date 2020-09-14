import React, {useState, useEffect} from 'react';

import api from '~/services/api';

import Background from '~/components/Background';
import DateInput from '~/components/DataInput';

import {Container, HourList, Hour, Title} from './styles';

export default function SelectDateTime({route, navigation}) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const {provider} = route.params;

  useEffect(() => {
    async function loadAvailable() {
      const response = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      console.tron.log(response.data);

      setHours(response.data);
    }

    loadAvailable();
  }, [date, provider.id]);

  function handleSelectHours(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <HourList
          data={hours}
          keyExtractor={item => String(item.time)}
          renderItem={({item}) => (
            <Hour
              onPress={() => handleSelectHours(item.value)}
              enabled={item.available}>
              <Title>{item.time}</Title>
            </Hour>
          )}
        />
      </Container>
    </Background>
  );
}
