function FreeModule () {
    return (
        <div className="freemodule w-full flex flex-col items-start gap-6">
            <span className="text-sm inkmute uppercase ">Бесплатные конфиги</span>
            <h1 className="font-semibold text-3xl">Подключайтесь прямо сейчас</h1>
            <p className="text-[16px] tracking-normal inkmute">Пять рабочих конфигов, которые обновляются <br/> автоматически. Скопируйте любой — и вернитесь в интернет.</p>
            <div className="freeConfigs-list bg-white rounded-lg p-4">
                <ul className="configs-list">
                    <li className="config-item min-w-0 flex gap-2.5 items-center p-[12px]">
                        <span className="num">01</span>
                        <span className="uri flex-1 text-[13px] tracking-[-0.01em] truncate mask-fade-right"> <span className="scheme">vless://</span>3418c77c-dc0b-3750-beee-b648cec6897d@lonyoxovygx.com:443?encryption=none&security=reality&type=tcp&sni=gutzmszaytg.dev&fp=chrome&pbk=137ddd9c9a16abf59616e3b6db5830ac12c0c1fe01e&sid=b3771100&flow=xtls-rprx-vision#unblock-01 </span>
                        <button className="copy flex-shrink-0 items-center gap-1 text-sm font-medium gap-1.5 inline-flex border-inkmute-line ">
                            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                                <rect x="5" y="5" width="8.5" height="8.5" rx="2" stroke="currentColor" stroke-width="1.4"></rect>
                                <path d="M3 10.5V4a1.5 1.5 0 0 1 1.5-1.5H10" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"></path>
                            </svg>
                           <span className="ml-1">Скопировать</span>
                        </button>
                    </li>
                    <li className="config-item">Конфиг 2</li>
                    <li className="config-item">Конфиг 3</li>
                    <li className="config-item">Конфиг 4</li>
                    <li className="config-item">Конфиг 5</li>
                </ul>
            </div>
        </div>
    )
}
export default FreeModule