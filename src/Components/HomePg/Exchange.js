import React from 'react'
import classes from './Exchange.module.css'
import Huobi from '../../Images/Huobi.png'
import Bitstamp from '../../Images/Bitstamp.png'

export default function Exchange() {
    return (
        <div>
            <div className={`${classes.margin}`}>
                <b className={`fs-1 ${classes.heading1}`}>Connect your favorite exchange</b>
                <div className={`my-5 row g-5 text-center ${classes.backgroundImage}`}>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo1}`}>
                        <svg width="352.856" height="83.314" viewBox="0 0 352.856 83.314">
                            <text transform="translate(94.856 10.175)" fill="#4d4d4d" font-size="50" font-family="Montserrat-Bold, Montserrat" font-weight="700"><tspan x="0" y="48">BINANCE</tspan></text>
                            <g transform="translate(-786.281 -573.561)">
                                <rect width="14.978" height="14.978" transform="translate(796.872 604.628) rotate(45)" fill="#4d4d4d" />
                                <rect width="14.978" height="14.978" transform="translate(827.938 604.628) rotate(45)" fill="#4d4d4d" />
                                <rect width="14.978" height="14.978" transform="translate(859.004 604.628) rotate(45)" fill="#4d4d4d" />
                                <g transform="translate(801.814 620.161)">
                                    <rect width="14.978" height="36.945" transform="translate(41.657) rotate(45)" fill="#4d4d4d" />
                                    <rect width="14.978" height="36.945" transform="translate(36.715 26.124) rotate(135)" fill="#4d4d4d" />
                                </g>
                                <g transform="translate(801.814 573.561)">
                                    <rect width="14.978" height="36.945" transform="translate(10.591 36.715) rotate(-135)" fill="#4d4d4d" />
                                    <rect width="14.978" height="36.945" transform="translate(15.533 10.591) rotate(-45)" fill="#4d4d4d" />
                                </g>
                            </g>
                        </svg>
                    </div>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo2}`}>
                        <img src={Huobi} alt="" />
                    </div>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo3}`}>
                        <svg width="303.397" height="70.143" viewBox="0 0 303.397 70.143">
                            <path d="M309.192,596.508c1.579-1.6,2.668-3.76,5.482-3.744,3.645.028,6.049,1.927,6.2,5.594.168,3.954.08,7.921.1,11.89v2.984c1.134-1,1.885-1.595,2.562-2.272q10.683-10.659,21.347-21.328c3.863-3.838,6.641-3.937,10.457-.209,5.3,5.184,10.524,10.45,15.722,15.741,2.729,2.774,2.833,6.21.41,8.714a6.261,6.261,0,0,1-8.765-.318c-4.009-4.176-8.136-8.236-11.992-12.121l-20.589,20.4q9.922,9.8,20.482,20.235c3.723-3.722,7.751-7.711,11.733-11.744a6.656,6.656,0,0,1,5.1-2.3,5.8,5.8,0,0,1,4.673,9.019,14.282,14.282,0,0,1-1.595,1.841q-7.656,7.662-15.342,15.3c-3.528,3.49-6.41,3.561-9.954.062-7.364-7.276-14.644-14.644-21.956-21.964-.555-.555-1.16-1.054-2.3-2.073v8.937c0,1.831.049,3.66-.02,5.487a5.991,5.991,0,0,1-4.518,6.09c-2.872.57-5.136-.623-6.7-3.506a5.249,5.249,0,0,0-.544-.706Z" transform="translate(-309.186 -586.688)" fill="#4d4d4d" />
                            <path d="M504.722,613.73v24.107h-8.059V596.686H503.9c5.121,7.872,10.451,16.07,16.206,24.911V596.764h8.12V637.8h-7.211c-5.105-7.872-10.374-16-15.648-24.133C505.158,613.688,504.936,613.707,504.722,613.73Z" transform="translate(-224.833 -582.19)" fill="#4d4d4d" />
                            <path d="M377.409,596.757v16.329l.579.368c4.776-5.655,9.549-11.31,14.26-16.877h9.741c-4.727,5.706-9.127,11.019-13.664,16.5,4.785,8.14,9.57,16.287,14.6,24.846H394c-3.534-5.945-7.189-12.108-11.095-18.682-1.8,2.211-3.5,4.137-4.991,6.214a4.888,4.888,0,0,0-.447,2.6c-.049,3.233-.014,6.468-.014,9.889h-7.83V596.764Z" transform="translate(-281.995 -582.239)" fill="#4d4d4d" />
                            <path d="M483.812,618.476a69.073,69.073,0,0,1-1.541,10.453c-1.937,6.7-9.28,10.606-16.819,9.484a14.223,14.223,0,0,1-12.4-13.351c-.2-5.155-.206-10.334.029-15.488a14.247,14.247,0,0,1,13.816-13.219c8.378-.461,14.53,4.476,15.928,11.207A96.271,96.271,0,0,1,483.812,618.476Zm-8.782-1.061h.017c0-2.429.145-4.869-.036-7.284a6.465,6.465,0,0,0-6.43-6.417c-3.848-.22-6.8,1.6-7.139,5.437a97.143,97.143,0,0,0-.1,16.354c.336,4.093,3.458,6.01,7.6,5.7A6.58,6.58,0,0,0,475,624.7c.178-2.416.033-4.857.033-7.29Z" transform="translate(-244.524 -582.354)" fill="#4d4d4d" />
                            <path d="M398.236,596.669h7.933V599.8c0,7.411-.061,14.818.039,22.227a13.655,13.655,0,0,0,.973,5,6.878,6.878,0,0,0,6.906,4.019,7.131,7.131,0,0,0,6.09-5.585,17.46,17.46,0,0,0,.29-3.625c.028-7.308.013-14.614.013-21.922v-3.2H428.7v12.681c0,4.666.054,9.332-.012,14-.09,6.09-2.632,10.828-8.276,13.411a15.76,15.76,0,0,1-16.7-1.6,12.107,12.107,0,0,1-5.391-9.472C398.052,616.113,398.236,606.491,398.236,596.669Z" transform="translate(-269.146 -582.198)" fill="#4d4d4d" />
                            <path d="M457.3,609.351h-7.922c-.29-.555-.61-1.16-.916-1.772a6.61,6.61,0,0,0-7.769-3.823,6.014,6.014,0,0,0-5.256,5.837c-.251,4.949-.342,9.919-.126,14.868a6.454,6.454,0,0,0,5.5,6.7c3.652.648,6.182-.793,8-4.557.125-.265.212-.551.4-1.05h8.166c-1.354,6.726-4.885,11.233-11.66,12.58-6.371,1.267-11.939-.29-15.949-5.655a11.768,11.768,0,0,1-2.175-4.93,61.535,61.535,0,0,1-.1-19.677,14.021,14.021,0,0,1,12.559-11.423C450.056,595.433,456.223,601.559,457.3,609.351Z" transform="translate(-256.29 -582.349)" fill="#4d4d4d" />
                            <path d="M489.793,637.766h-7.577V596.733h7.577Z" transform="translate(-231.333 -582.169)" fill="#4d4d4d" />
                            <path d="M339.377,618.544a5.826,5.826,0,1,1,5.966-5.678A6.021,6.021,0,0,1,339.377,618.544Z" transform="translate(-298.342 -577.601)" fill="#4d4d4d" />
                        </svg>
                    </div>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo4}`}>
                        <svg width="263.391" height="83.309" viewBox="0 0 263.391 83.309">
                            <g transform="translate(117.112 20.125)">
                                <path d="M1182.87,150.192l-17.834-25.277h.55q7.661,0,15.322-.007a.777.777,0,0,1,.729.381q4.823,6.982,9.666,13.949c.081.116.164.231.281.4.106-.149.195-.27.28-.394q4.79-7,9.574-14.012a.625.625,0,0,1,.587-.319q7.425.013,14.851.007c.123,0,.247.016.431.029-.675.937-1.314,1.825-1.955,2.712q-7.762,10.744-15.534,21.48a.667.667,0,0,0,.009.947q9.2,12.764,18.371,25.548c.081.112.154.229.28.417h-.515q-7.853,0-15.707.008a.756.756,0,0,1-.721-.386q-5.01-7.526-10.042-15.037c-.078-.117-.163-.23-.278-.39-.458.689-.9,1.347-1.332,2.007q-4.436,6.726-8.866,13.456a.607.607,0,0,1-.564.351q-7.917-.016-15.835-.009c-.1,0-.192-.01-.368-.019Z" transform="translate(-1072.198 -124.908)" fill="#4d4d4d" />
                                <path d="M920.725,147.4h22.533v11.181H920.715v17.5H906.246V125h40.091v11.154H920.725Z" transform="translate(-906.246 -124.964)" fill="#4d4d4d" />
                                <path d="M1079.25,125.026v11.441h-15.6V176.1h-14.506V136.5h-15.679V125.026Z" transform="translate(-988.075 -124.984)" fill="#4d4d4d" />
                            </g>
                            <rect width="67.432" height="22.121" transform="translate(27.293)" fill="#4d4d4d" />
                            <rect width="48.523" height="22.121" transform="translate(27.472 30.505)" fill="#4d4d4d" />
                            <rect width="22.121" height="22.121" transform="translate(0 30.505)" fill="#4d4d4d" />
                            <rect width="22.121" height="22.121" transform="translate(27.472 61.188)" fill="#4d4d4d" />
                        </svg>
                    </div>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo5}`}>
                        <img src={Bitstamp} alt="" />
                    </div>
                    <div className={`col-lg-4 col-md-4 col-6 ${classes.exchangeLogo6}`}>
                        <svg width="313.912" height="49.473" viewBox="0 0 313.912 49.473">
                            <path d="M122.1,765.505c0,2.632.016,5.263-.006,7.895a4.366,4.366,0,0,1-3.232,4.145,4.286,4.286,0,0,1-5.121-2.616,5.433,5.433,0,0,1-.326-1.779c-.024-4.21-.006-8.421-.007-12.632a9.542,9.542,0,0,0-.059-1.409,4.526,4.526,0,0,0-4.47-3.825,4.582,4.582,0,0,0-4.566,3.73,8.179,8.179,0,0,0-.131,1.568c-.01,4.072,0,8.144-.015,12.216a6.683,6.683,0,0,1-.217,1.882,4.318,4.318,0,0,1-4.47,3.006,4.376,4.376,0,0,1-3.889-3.438,8.931,8.931,0,0,1-.14-1.73q-.01-6.4.011-12.8a4.393,4.393,0,0,0-1.923-3.761,4.32,4.32,0,0,0-4.709-.367,4.183,4.183,0,0,0-2.5,3.913c-.034,4.46-.013,8.92-.02,13.38a4.587,4.587,0,0,1-1.484,3.651,4.127,4.127,0,0,1-4.405.839,4.023,4.023,0,0,1-2.791-3.588c-.076-.822-.059-1.655-.06-2.483-.006-3.518,0-7.036-.007-10.553a13.362,13.362,0,0,0-.092-1.741,4.537,4.537,0,0,0-6.452-3.506,4.4,4.4,0,0,0-2.665,4.327q0,6.524-.005,13.047a7.1,7.1,0,0,1-.126,1.317,4.3,4.3,0,0,1-8.523-.7c-.029-4.986-.153-9.978.028-14.957a30.547,30.547,0,0,1,8.063-19.9,31.209,31.209,0,0,1,12.234-8.494A30.7,30.7,0,0,1,92,728.246a31.365,31.365,0,0,1,29.206,23.715,28.267,28.267,0,0,1,.9,7.312C122.081,761.35,122.1,763.428,122.1,765.505Z" transform="translate(-59.638 -728.227)" fill="#4d4d4d" />
                            <path d="M485.1,771.963c.018.34.041.584.042.828,0,1.3-.01,2.6.006,3.906a.7.7,0,0,1-.56.789,12.043,12.043,0,0,1-5.244.466,7.02,7.02,0,0,1-2.466-.674,5.34,5.34,0,0,1-2.586-3.218c-.192-.606-.342-1.225-.517-1.836-.075-.259-.165-.513-.3-.921-.282.258-.483.421-.659.608a23.55,23.55,0,0,1-5.8,4.538,17.312,17.312,0,0,1-9.418,2.147,15.259,15.259,0,0,1-6.862-1.716,12.015,12.015,0,0,1-6.235-8.93,17.907,17.907,0,0,1,.421-7.243,10.6,10.6,0,0,1,4.531-6.245,17.116,17.116,0,0,1,7.36-2.873c3.365-.486,6.739-.9,10.108-1.361.985-.134,1.965-.307,2.947-.462a3.721,3.721,0,0,0,3.306-3.145,8.851,8.851,0,0,0,.044-3.952,6.27,6.27,0,0,0-3.865-4.472,14.579,14.579,0,0,0-4.838-1.059,17.7,17.7,0,0,0-5.109.363,7.484,7.484,0,0,0-6,6.154,11.027,11.027,0,0,0-.069,1.157c-.066.578-.21.723-.8.727q-2.577.022-5.154,0c-.65-.005-.763-.113-.7-.727a18.637,18.637,0,0,1,1.591-6.575,10.529,10.529,0,0,1,4.351-4.555A21.345,21.345,0,0,1,461.122,731a27.982,27.982,0,0,1,5.39.083,24.2,24.2,0,0,1,6.13,1.368,12.123,12.123,0,0,1,5.037,3.108,9.928,9.928,0,0,1,2.65,5.955c.071.882.113,1.769.114,2.653q.013,12.382.012,24.764a8,8,0,0,0,.175,1.724,1.624,1.624,0,0,0,1.558,1.375c.52.039,1.044.049,1.566.04C484.168,772.064,484.58,772.007,485.1,771.963Zm-11.709-17.919c-.31.129-.552.237-.8.331-.955.364-1.9.771-2.87,1.076a71.343,71.343,0,0,1-7.888,1.5c-1.789.348-3.583.7-5.337,1.182a6.02,6.02,0,0,0-4.233,3.788,8.059,8.059,0,0,0-.067,5.771,6.3,6.3,0,0,0,4.483,4.089,14.28,14.28,0,0,0,14.127-4.285,9.155,9.155,0,0,0,2.3-5.909c.085-1.492.209-2.982.273-4.474C473.422,756.125,473.388,755.139,473.388,754.044Z" transform="translate(-301.624 -729.913)" fill="#4d4d4d" />
                            <path d="M719.118,757.1h-1.254q-14.548,0-29.1,0c-.433,0-.866.045-1.309.07a4.3,4.3,0,0,0-.066.583,23.057,23.057,0,0,0,1.382,7.471,13.224,13.224,0,0,0,2.32,3.909,9.444,9.444,0,0,0,4.851,3.038,12.627,12.627,0,0,0,7.435-.02,11.7,11.7,0,0,0,7.576-7.481c.075-.208.136-.421.2-.632a.931.931,0,0,1,.93-.7c1.994-.009,3.988,0,5.982.014.048,0,.1.05.249.134-.1.463-.168.973-.315,1.459a19.684,19.684,0,0,1-6.641,10.2,17.981,17.981,0,0,1-8.668,3.507,22.662,22.662,0,0,1-5.794.133,17.624,17.624,0,0,1-10.037-4.353,20.288,20.288,0,0,1-6.32-11.241,36.106,36.106,0,0,1-.831-9.4,27.089,27.089,0,0,1,5.109-15.029,17.488,17.488,0,0,1,11.26-7.054,19.007,19.007,0,0,1,15.006,3.135,16.585,16.585,0,0,1,6.717,10.159,51.853,51.853,0,0,1,.852,5.737c.209,1.813.312,3.638.456,5.458C719.134,756.444,719.118,756.688,719.118,757.1Zm-7.544-5.954a4.691,4.691,0,0,0,.056-.47,5.066,5.066,0,0,0-.026-.664,20.122,20.122,0,0,0-2.059-6.877,9.259,9.259,0,0,0-2.19-2.794,11.06,11.06,0,0,0-9.889-2.333,12.394,12.394,0,0,0-9.865,11.307,3.5,3.5,0,0,0,.136,1.83Z" transform="translate(-449.693 -730.176)" fill="#4d4d4d" />
                            <path d="M846.511,776.871h-7.042c-.027-.405-.073-.78-.073-1.154q-.009-11.3-.015-22.6c0-1.993-.035-3.988-.133-5.978a17.451,17.451,0,0,0-.943-4.873,6.39,6.39,0,0,0-5.2-4.5c-4.719-.766-8.835.456-11.969,4.256a10.693,10.693,0,0,0-2.248,5.288,28.2,28.2,0,0,0-.369,4.042c-.064,8.114-.081,16.229-.113,24.344-.005,1.3,0,1.305-1.337,1.306-1.58,0-3.159.007-4.738,0-.8-.005-.849-.068-.869-.848,0-.166,0-.332,0-.5q0-21.189,0-42.378c0-1.426-.012-1.259,1.259-1.263q2.245-.006,4.489,0c.808,0,.825.019.828.851.006,1.44,0,2.881,0,4.321v.859c.415.183.534-.095.694-.263.744-.781,1.447-1.606,2.226-2.35a15.5,15.5,0,0,1,9.632-4.391,18.671,18.671,0,0,1,8.482,1.164,10.37,10.37,0,0,1,6.345,7.213,30.867,30.867,0,0,1,.859,4.724,35.764,35.764,0,0,1,.187,4.142q.04,13.586.042,27.172C846.511,775.886,846.511,776.324,846.511,776.871Z" transform="translate(-532.599 -729.946)" fill="#4d4d4d" />
                            <path d="M580.461,752.946c.419-.344.7-.538.942-.779q2.622-2.665,5.227-5.348,4.605-4.735,9.2-9.477c.907-.934,1.822-1.86,2.711-2.81a2.421,2.421,0,0,1,1.914-.81c2.355.027,4.71.011,7.065.011h.713c-.242.293-.378.486-.542.651q-7.346,7.4-14.7,14.8c-.1.1-.2.192-.3.292-.81.838-.844,1.167-.214,2.181q8,12.876,16,25.751c.217.349.409.714.668,1.167a3.675,3.675,0,0,1-.681.15q-3.7.024-7.4.025a1.679,1.679,0,0,1-1.493-1.017c-1.057-1.819-2.135-3.625-3.208-5.435q-4.637-7.822-9.278-15.641c-.176-.3-.39-.572-.641-.937-.289.25-.5.412-.69.6-1.565,1.57-3.114,3.154-4.691,4.711a2.389,2.389,0,0,0-.75,1.843c.025,4.763.013,9.527.013,14.291,0,.194,0,.388,0,.582-.01.918-.01.907-.934.93-1.438.035-2.876.09-4.314.127a3.168,3.168,0,0,1-.742-.06c-.649-.139-.841-.356-.856-1.02-.017-.775.011-1.551.011-2.326q0-19.692.009-39.384c0-.71.114-1.42.172-2.1a37.3,37.3,0,0,1,6.609-.089c.026.32.077.664.077,1.008q.008,8.434.007,16.867C580.379,752.046,580.423,752.391,580.461,752.946Z" transform="translate(-382.891 -731.684)" fill="#4d4d4d" />
                            <path d="M297.227,733.886c-.2.215-.4.434-.614.644q-7.481,7.505-14.964,15.008c-.059.059-.118.117-.176.177-.564.577-.571.582-.154,1.254,1.3,2.094,2.611,4.181,3.908,6.276q6.386,10.31,12.764,20.625c.155.251.282.519.471.868-.338.024-.575.054-.812.054-2.328,0-4.656-.02-6.983.013a1.971,1.971,0,0,1-1.878-1.1q-6.185-10.478-12.4-20.939c-.194-.327-.426-.631-.7-1.039-.278.256-.5.449-.706.651-1,.958-1.953,1.963-2.993,2.87a7.508,7.508,0,0,0-2.487,6.162c.05,4.209.041,8.419.053,12.628a3.248,3.248,0,0,1-.062.463,38.4,38.4,0,0,1-6.565.051c-.019-.3-.057-.616-.058-.935q-.006-8.559,0-17.118,0-12.839,0-25.677c0-1.095,0-1.1,1.081-1.1,1.579,0,3.159,0,4.738,0,.863,0,.87.007.87.889q0,8.518.006,17.035a3.349,3.349,0,0,0,.106.895c.034.119.241.19.379.289.547-.634,1.037-1.258,1.585-1.826q4.588-4.753,9.2-9.484c2.2-2.267,4.41-4.521,6.58-6.815a2.951,2.951,0,0,1,2.412-1.014c2.132.063,4.267.019,6.4.019h.907Z" transform="translate(-187.486 -731.667)" fill="#4d4d4d" />
                            <path d="M376.4,732.44h6.326a18.945,18.945,0,0,1,.053,2.318c.012.8,0,1.606,0,2.41v2.293c.424.134.492-.174.629-.351.847-1.095,1.649-2.226,2.535-3.287a14.683,14.683,0,0,1,3.42-3,10.685,10.685,0,0,1,7.029-1.394.5.5,0,0,1,.517.533c0,2.322,0,4.645,0,7.007a4.7,4.7,0,0,1-.6.123c-.966.062-1.933.114-2.9.164a9.959,9.959,0,0,0-7.616,3.985,11.689,11.689,0,0,0-2.516,6.311c-.089,1.019-.156,2.043-.158,3.065q-.02,11.8-.007,23.6v.943a41.687,41.687,0,0,1-6.711.092c-.013-.015-.033-.035-.05-.057a.21.21,0,0,1-.046-.066.925.925,0,0,1-.056-.24q-.007-21.853-.008-43.707a4.342,4.342,0,0,1,.035-.5A1.133,1.133,0,0,1,376.4,732.44Z" transform="translate(-258.809 -730.188)" fill="#4d4d4d" />
                        </svg>
                    </div>
                    <div className='mx-auuto h5'>
                        <b>...and many more!</b>
                    </div>
                </div>
            </div>
        </div>
    )
}
