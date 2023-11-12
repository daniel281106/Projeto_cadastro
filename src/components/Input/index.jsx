import * as C from "./styles.js"

export const Input = ({ icon: Icon, ...rest }) => {
    return (
        <C.Container>
            {Icon && <Icon />}
            <input {...rest} />

        </C.Container>
    )
}
