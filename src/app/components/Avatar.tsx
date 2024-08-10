import IconContainer from "./IconContainer"

export const Avatar = (props: any) => {
    return (
        <IconContainer>
            <div className="rounded-full w-12 h-12 object-cover border-[0.15em] border-green-800 overflow-hidden p-0 bg-green-800">
                <img src={props.img === '' || !props.img ? "/avatar-placeholder.png" : props.img} className="m-0  border-green-800 w-12 h-12 rounded-full object-cover" />
            </div>
        </IconContainer>
    )
}
