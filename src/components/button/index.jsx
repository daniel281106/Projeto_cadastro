import * as C from "./styles.js";

export const Button = ({ title, loading = false, ...rest  })=>{
    return(
        <C.Container
        type="submit"
        disabled={loading}
        {...rest}
        >
            {loading ? "Carregando..." : title}

        </C.Container>

    )

}