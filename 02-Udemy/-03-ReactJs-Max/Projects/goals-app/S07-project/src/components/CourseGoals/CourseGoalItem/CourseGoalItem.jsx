import { getSavedGoals } from '../../../App';

import './CourseGoalItem.css';

const CourseGoalItem = props => {
  const goals = getSavedGoals()
  let check;

  const checkItemHadler = () => {
    const goal = goals.find((goal) => goal.id === props.id)
    check = goal.check
  }

  const onCheck = () => {
    props.onCheck(props.id)
    checkItemHadler()
  }

  checkItemHadler()

  const deleteHandler = () => {
    props.onDelete(props.id);
  };

  return (
    <div className='goal-holder'>
      <li className="goal-item" onClick={deleteHandler}>
        {props.children}
      </li>
      <input type="checkbox" name="" id="" onChange={onCheck} checked={check} />
    </div>
  );
};

export default CourseGoalItem;
