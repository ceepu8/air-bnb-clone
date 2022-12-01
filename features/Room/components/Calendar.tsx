import { DayPicker } from 'react-day-picker';
import { useDispatch, useSelector } from 'react-redux';
import { setDate } from '../redux/formReducer';

const Calendar = () => {
  const dispatch = useDispatch();
  const range = useSelector((state: any) => state.formReducer.date);
  return (
    <div className="flex flex-col items-center my-6">
      <DayPicker
        mode="range"
        selected={range}
        onSelect={(val) => {
          dispatch(setDate(val));
        }}
        numberOfMonths={2}
      />
    </div>
  );
};

export default Calendar;
