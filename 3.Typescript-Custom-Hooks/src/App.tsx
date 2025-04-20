import './App.css'
import useCounter from './hooks/useCounter';
import useToggle from './hooks/useToggle';

import useCopyToClipboard from './hooks/useCopyToClipboard.jsx';

function App() {

  /*const { open, change } = useToggle();
  //* useToggle hook'u kullanarak open ve change fonksiyonunu alıyoruz object destructuring ile
  //* alınan değerleri component içinde istediğimiz gibi kullanabiliriz

  return (
    <div>
      {open && <div style={{ width: '100px', height: '100px', backgroundColor: 'red' }}>Kutu</div>}
      <button onClick={change} >{open ? 'Gizle' : 'Göster'}</button>
    </div>
  )*/

  const [copied, copy] = useCopyToClipboard("Çalış çalış nereye kadar");

  return (

    <div>
      {copied && 'kopyalandı'}
      <button onClick={copy} >Kopyala</button>
    </div>
  )

}

export default App
