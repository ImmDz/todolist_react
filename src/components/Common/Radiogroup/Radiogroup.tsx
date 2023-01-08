import { FC, Fragment } from "react"

interface RadiogroupProps {
    items: { id: string; label: string; value: string }[];
    name: string;
    value: string;
}

export const Radiogroup: FC<RadiogroupProps> = (props) => {
    return (
        <div>
            {props.items.map(item => (
                <Fragment key={item.id}>
                    <input
                        id={item.id}
                        type="radio"
                        value={item.value}
                        checked={item.value === props.value} />
                    <label htmlFor={item.id}>{item.label}</label>

                </Fragment>
            ))}
        </div>
    )
}