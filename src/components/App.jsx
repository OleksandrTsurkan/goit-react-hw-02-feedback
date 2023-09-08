import Counter from './Counter/Counter';
import Header from './Header/Header';
import Modal from './Modal/Modal';
import { Component } from 'react';
import TodoList from './TodoList/TodoList';

class App extends Component {
  state = { isShowModal: false };

  toggleModal = () => {
    this.setState(prev => ({ isShowModal: !prev.isShowModal }));
  };

  render() {
    return (
      <>
        <Header toggleModal={this.toggleModal} />
        <Counter />
        {this.state.isShowModal && (<Modal toggleModal={this.toggleModal}>Text for Modal</Modal>
        )}

        <TodoList/>
      </>
    );
  }
}

export default App;
// export const App = () => {
//   return (
//     <div
//     style={{
//       height: '100vh',
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       fontSize: 40,
//       color: '#010101',
//     }}
//     >
//       <Counter />
//       <Header />
//       <Modal></Modal>
//     </div>
//   );
// };
