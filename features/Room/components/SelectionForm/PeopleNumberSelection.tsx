import Button from '@/components/general/Button';
import Dropdown from '@/components/navigation/Dropdown';
import { PEOPLE_SELECTION } from '@/constants/room';
import useMouseLeave from '@/hooks/useMouseLeave';
import classNames from 'classnames';
import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

interface People {
  adult: number;
  children: number;
  toddler: number;
  pet: number;
}

const PeopleNumberPopup = ({
  isOpen,
  handleClose,
  people,
  setPeople,
}: {
  isOpen: boolean;
  handleClose: () => void;
  people: People;
  setPeople: Dispatch<SetStateAction<People>>;
}) => {
  const handleIncrease = (name: keyof People) => {
    setPeople((state) => {
      return { ...state, [name]: state[name] + 1 };
    });
  };

  const handleDecrease = (name: keyof People) => {
    setPeople((state) => {
      return { ...state, [name]: state[name] - 1 };
    });
  };

  return (
    <Dropdown
      isOpen={isOpen}
      className="rounded-md min-w-full px-4 py-6 border-grey-300 box-light-shadow"
    >
      <div>
        {PEOPLE_SELECTION.map((each) => {
          const { name, id, note, keyName } = each;
          return (
            <div key={id} className="flex items-center justify-between">
              <div className="mb-4">
                <p className="font-semibold">{name}</p>
                <span className="text-sm">{note}</span>
              </div>
              <div className="flex items-center">
                <Button
                  shape="circle"
                  border="default"
                  borderColor="grey"
                  onClick={() => handleDecrease(keyName as keyof People)}
                  disabled={people[keyName as keyof People] === 0}
                  className={classNames('text-grey-500', {
                    'text-grey-300 border-grey-200': people[keyName as keyof People] === 0,
                  })}
                >
                  <AiOutlineMinus
                    className={classNames('text-grey-500', {
                      'text-grey-300': people[keyName as keyof People] === 0,
                    })}
                    size={12}
                  />
                </Button>
                <span className="mx-3">{people[keyName as keyof People]}</span>
                <Button
                  shape="circle"
                  border="default"
                  borderColor="grey"
                  onClick={() => handleIncrease(keyName as keyof People)}
                >
                  <AiOutlinePlus className="text-grey-500" size={12} />
                </Button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-right">
        <Button
          variant="transparent"
          text="black"
          className="underline text-md font-medium"
          onClick={handleClose}
        >
          Đóng
        </Button>
      </div>
    </Dropdown>
  );
};

const PeopleNumberSelection = () => {
  const { ref, value: isMouseIn, handleClose } = useMouseLeave<HTMLDivElement>();
  const [state, setState] = useState<People>({
    adult: 0,
    children: 0,
    toddler: 0,
    pet: 0,
  });

  return (
    <div ref={ref} className="relative">
      <button className="flex w-full border-[1px] border-solid border-t-[0px] border-grey-400 rounded-b-md">
        <div className="flex-1 text-left p-2">
          <div className="text-[8px] font-semibold leading-3">GUESTS</div>
          <div className="text-sm text-grey-500">
            {state.adult + state.children + state.toddler} guest
          </div>
        </div>
      </button>
      <PeopleNumberPopup
        isOpen={isMouseIn}
        handleClose={handleClose}
        people={state}
        setPeople={setState}
      />
    </div>
  );
};

export default PeopleNumberSelection;
