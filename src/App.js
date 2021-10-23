import './App.css';
import Course from './Components/Course';
import Title from './Components/Title';

function App() {
  return (
    <div className="courses">
      <Title title_1="Курсы " title_2="A-Level" />
      <Course num="01" name="Программирование" color="rgb(246, 188, 1)" />
      <Course num="02" name="Дизайн" color="rgb(12, 187, 167)" />
      <Course num="03" name="Тестирование" color="rgb(254, 103, 51)" />
      <Course num="04" name="Менеджмент" color="rgb(254, 101, 36)" />
      <Course num="05" name="Online курсы" color="rgb(186, 33, 33)" />
    </div>
  );
};

export default App;
