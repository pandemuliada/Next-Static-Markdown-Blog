---
title: 'React Hooks : useState'
slug: 'react-hooks-use-state'
description: 'Berkenalan dengan React Hook : useState'
createdAt: '2020-01-15'
heroImage: '/static/posts/use-state.png'
categories: ['react', 'front end']
---

Halo semua, apa kabar kalian ? semoga sehat-sehat saja ya. sudah makan ? yang belum makan, makan dulu agar fokus mengikuti tulisan asal asalan saya ini hehe. Kali ini kita akan membicarakan fitur terbaru dari react yaitu **hooks**. Nah apa itu react hooks ?

Sebelum ada hooks di react, untuk membuat statefull component (komponen yang mempunyai state, dan lifecycle) kita harus menggunakan class component. Namun, semuanya berubah ketika hooks menyerang ! udah kayak avatar aja nih 😂.

Dengan menggunakan hooks kita bisa membuat statefull component dengan menggunakan function component. Pada tulisan kali ini kita akan membahas salah satu hooks yaitu **useState**.

## Penggunaan UseState

Dengan menggunakan useState kita bisa menggunakan state pada function component. Berikut adalah contoh sederhana penggunaannya.

```jsx
import React, { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  )
}
```

```jsx
const [count, setCount] = useState('0')
```

Saya mendefinisikan 2 variabel yaitu `count` dan `setCount`. Variabel `count` berfungsi untuk menyimpan state, dan variabel `setCount` adalah sebuah function yang digunakan untuk mengubah nilai dari `count`. Sementara parameter 0 yang di-pass ke dalam useState merupakan nilai awal yang diberikan ke variabel `count`.

```jsx
const = [count, setCount] = useState(0) // this syntax called array destructuring
```

Sintaks kode diatas pada javascript disebut _array desctructuring_ yang bisa membuat kode kita lebih singkat dan menjadi lebih gampang dibaca. Kalau gak make array destructuring gimana ? Berikut adalah penggunaan useState jika kita tidak menggunakan array destructuring.

```jsx
const count = useState(0) // This is array
count[0] // count state
count[1]('set new value') // Function to update the count state
```

Nah kenapa bisa begitu ? Jawabannya adalah karena useState me-return sebuah array yang berisi 2 item. Dimana item pertama (`count[0]`) adalah variabel yang menyimpan nilai untuk state sedangkan item kediua (`count[1]`) adalah fungsi yang digunakan untuk mengubah nilai dari state itu sendiri.

Menggunakan cara diatas (tanpa array destructuring) membuat kita bingung, jadi sebaiknya kita menggunakan array destructuring. Tapi kalau kalian suka ribet, wes gak apa sih 😂

## Multiple State dengan UseState

Lha itu kan untuk handle satu state aja ? kalau banyak gimana dong ? Ya tinggal buat lagi menggunakan useState.

```jsx
const [users, setUsers] = useState([])
const [posts, setPosts] = useState([])
const [anotherState, setAnotherState] = useState('initialStateValue')
```

Gampang kan ? wooiya dong hehe. Sekian dulu tutorial dari saya, semoga bermanfaat dan selamat mencoba. Happy coding ✌️
