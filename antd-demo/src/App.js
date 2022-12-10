import { Button } from 'antd';
import 'antd/dist/reset.css';
import './App.css';
import { ConfigProvider } from 'antd'

function App() {
  return (
    <ConfigProvider
      theme={
        {
          token: {
            colorPrimary: '#00b96b',
          }
        }
      }>
      <div className="App">
        <Button type="primary">Button</Button>
        <Button type="default">Button</Button>

      </div>
    </ConfigProvider>

  );
}

export default App;
