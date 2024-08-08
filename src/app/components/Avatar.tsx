import IconContainer from "./IconContainer"

export const Avatar = (props: any) => {
    return (
        <IconContainer>
            <div className="rounded-full w-12 h-12 border-[0.15em] border-green-800">
                <img src={props.img === '' || !props.img ? "/avatar-placeholder.png" : props.img} className="rounded-full" />
            </div>
        </IconContainer>
    )
}
