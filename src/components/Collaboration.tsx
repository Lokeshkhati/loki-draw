const Collaboration = () => {
    return (
        <div>
            <button title='Live collaboration' className=" bg-[#a8a5ff] flex justify-center items-center w-[2.25rem] h-[2.25rem] border text-[#4f4d6f] border-[#a8a5ff] rounded-md hover:bg-[#b2aeff] hover:border-[#b2aeff]" >
                <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                >
                    <g strokeWidth={1.5}>
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <circle cx={9} cy={7} r={4} />
                        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2M16 3.13a4 4 0 0 1 0 7.75M21 21v-2a4 4 0 0 0-3-3.85" />
                    </g>
                </svg>
            </button>
        </div>
    )
}
export default Collaboration