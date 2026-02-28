import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';

const areas_das_tarraxas = [
  { note: 'G', top: 50, left: 30 },
  { note: 'C', top: 50, right: 30 },
  { note: 'E', top: 100, right: 30 },
  { note: 'A', top: 100, left: 30 },
];

export default function TunerUkulele() {
  const [cordaSelecionada, setCordaSelecionada] = useState(null);

  return (
    <View className="flex-1 relative items-center justify-center bg-white">
      <Image
        source={require('../assets/images/UKULELE.png')}
        resizeMode="contain"
        className="w-80 h-96"
      />

      {/* Áreas Clicáveis das Tarraxas */}
      {areas_das_tarraxas.map((corda) => (
        <TouchableOpacity
          key={corda.note}
          className="absolute w-10 h-10 rounded-full justify-center items-center"
          style={{
            top: corda.top,
            left: corda.left,
            right: corda.right,
            borderColor: cordaSelecionada === corda.note ? '#2ECC71' : 'transparent',
            borderWidth: cordaSelecionada === corda.note ? 3 : 0,
          }}
          onPress={() => setCordaSelecionada(corda.note)}
        />
      ))}

      {/* Exibição da Nota Selecionada */}
      {cordaSelecionada && (
        <View className="absolute bottom-12">
          <Text className="text-6xl font-bold text-[#2ECC71]">{cordaSelecionada}</Text>
        </View>
      )}
    </View>
  );
}