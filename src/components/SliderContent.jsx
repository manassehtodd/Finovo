function SliderContent(props){
    return(
        <div className="bg-gray-100 justify-center p-8">
            <div className="flex items-center flex-col gap-4">
                <img src={props.img} alt="A Man" className="w-40 h-full rounded-2xl "/>
                <div>
                <p className="text-gray-600 text-sm text-center  italic">{props.text}</p>
                <p className="text-xl text-black font-semibold text-center">{props.name}</p>
                </div>
            </div>
        </div>
    )
}

export default SliderContent;