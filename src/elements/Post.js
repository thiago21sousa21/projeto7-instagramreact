import { useState } from "react";

export default function Post(props){
    let[corMakr, setCorMark]=useState('bookmark-outline');
    let[pressLike, setPressLike]= useState("heart-outline");
    let[classColor, setClassColor] = useState ('');
    let[numeroCurtidas, setNumeroCurtidas] = useState(props.likeOthers);
    function trocaMark(){
        if(corMakr== 'bookmark-outline'){
            corMakr = 'bookmark';
        } else{
            corMakr = 'bookmark-outline';       
        }
        setCorMark(corMakr);
    }

    function trocaLike(){
        if( pressLike == 'heart-outline'){
            pressLike = 'heart';
            classColor = 'vermelho';
            numeroCurtidas++;
        }else{
            pressLike = 'heart-outline'
            classColor = '';
            numeroCurtidas--;
        }
        setPressLike(pressLike);
        setClassColor(classColor);
        setNumeroCurtidas(numeroCurtidas);
    }

    function likeClickImagem(){
        if(pressLike != 'heart')numeroCurtidas++;
        pressLike = 'heart';
        classColor = 'vermelho'; 
        setPressLike(pressLike);
        setClassColor(classColor);  
        setNumeroCurtidas(numeroCurtidas);
    }

    return(
    <div class="post">
        <div class="topo">
            <div class="usuario">
                <img src={props.headPhoto} alt={props.headName}/>
                {props.headName}
            </div>
            <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
        </div>

        <div class="conteudo">
            <img onClick={likeClickImagem} src={props.conteudo} alt="gato-telefone"/>
        </div>

        <div class="fundo">
            <div class="acoes">
                <div>
                    <ion-icon onClick={trocaLike} class={classColor} name={pressLike}></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon onClick={trocaMark}  name={corMakr}></ion-icon>
                </div>
            </div>

            <div class="curtidas">
                <img src={props.likeImg}alt={props.likeUser}/>
                <div class="texto">
                    Curtido por <strong>{props.likeUser}</strong> e <strong>outras {numeroCurtidas.toLocaleString('pt-BR')} pessoas</strong>
                </div>
            </div>
        </div>
    </div>
    );
}