import { Fragment } from "react";
import { Input, Radiogroup, Button } from "./Common/index";

const tasks = [
    { id: 1, label: 'Выучить JS', isDone: true },
    { id: 2, label: 'Выучить React', isDone: false },
    { id: 3, label: 'Сделать домашку', isDone: true },
    { id: 4, label: 'Сделать проект', isDone: false },
    { id: 5, label: 'Устроиться на работу', isDone: false },
];

const filters = [
    { id: '1', label: 'Выполенные', value: 'Completed' },
    { id: '2', label: 'Невыполенные', value: 'Incompleted' },
    { id: '3', label: 'Всё', value: 'All' }
]

let filterState: string = 'All';

export const App = () => {
    return (
        <Fragment>
            <Input type="text" placeholder="title"></Input>
            <Button onClick={() => console.log("Добавил")}>Add task</Button>
            <ul>{tasks
                .filter((item): boolean => {
                    if (filterState === 'Completed') {
                        return item.isDone;
                    }
                    if (filterState === 'Incompleted') {
                        return !item.isDone;
                    }
                    return true;
                })
                .map(item =>
                    <li key={item.id}>
                        <Input type="checkbox" checked={item.isDone} />
                        {item.label}
                        {item.isDone ? <Button onClick={() => console.log("Удалил " + item.label)}>Delete</Button> : null}
                    </li>)}
            </ul>
            <Radiogroup items={filters} name="filter" value={filterState} />
        </Fragment>
    )
}
