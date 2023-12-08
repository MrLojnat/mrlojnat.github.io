let pourcentage= 25;
let i = 0;
let cptBonnesReponses = 0;
let color_barre= document.querySelector(".barre_color");

const questions = [
    ["L'industrie de la fast fashion contribue significativement à la pollution", true],
    ["Un choix de consommation individuel est nécessaire et suffisant pour un changement significatif", false],
    ["La fabrication et l'élimination des produits électroniques obsolètes ne contribuent pas au problème du changement climatique", false],
    ["La promotion de l'économie circulaire peut aider à réduire les effets néfastes de la surconsommation sur l'environnement", true],
    ["Le secteur des transports est-il celui qui pollue le plus ?", true],
    ["Les véhicules électriques résoudront nos problèmes", false],
    ["L’avion a plus une grande empreinte carbone par individu que la voiture", true],
    ["Les émissions de gaz à effet de serre provenant du secteur des transports sont principalement constituées de dioxyde de soufre", false],
    ["Les centrales nucléaires émettent des gaz à effet de serre pendant leur fonctionnement normal", false],
    ["Les barrages hydroélectriques sont une source d'énergie renouvelable sans impact sur l'environnement", false],
    ["L'énergie géothermique utilise la chaleur naturelle provenant de la Terre pour produire de l'électricité", true],
    ["Les panneaux solaires ne sont efficaces que dans les régions ensoleillées", false],
    ["Les forêts agissent comme des puits de carbone, absorbant le dioxyde de carbone et contribuant ainsi à réguler le climat", true],
    ["Les espèces animales et végétales peuvent s'adapter rapidement aux changements climatiques sans subir de pertes majeures", false],
    ["L'acidification des océans, causée par l'absorption accrue de dioxyde de carbone, peut nuire aux organismes marins tels que les coraux et les mollusques", true],
    ["Les variations de la température de surface des océans peuvent influencer les régimes climatiques mondiaux", true],
    ["Les entreprises qui adoptent des pratiques respectueuses de l'environnement sont généralement moins rentables que celles qui ne le font pas", false],
    ["Les États côtiers prennent des mesures pour atténuer les effets du changement climatique, tels que la montée du niveau de la mer", true],
    ["Les incitations fiscales pour les énergies renouvelables peuvent encourager les investissements privés dans des sources d'énergie plus propres", true],
    ["Les initiatives de reboisement entreprises au niveau local peuvent aider à compenser les émissions de gaz à effet de serre", true],
    ["Les changements climatiques influencent la distribution géographique des espèces végétales et animales", true],
    ["Les coraux sont menacés par le blanchissement dû au réchauffement des océans, mettant en péril de nombreux écosystèmes marins", true],
    ["La montée du niveau de la mer est principalement due à la dilatation thermique de l'eau de mer résultant du réchauffement climatique", true],
    ["Les perturbations climatiques peuvent accroître les risques de propagation de maladies infectieuses", true]
];

window.addEventListener("load", init);

async function init() {

    const quest = document.getElementById('question');
    quest.innerHTML = '<span>' + questions.at(i)[0] + '</span>';

    const vrai = document.getElementById("vrai");
    const faux = document.getElementById("faux");

    vrai.addEventListener("click", verif, false)
    vrai.result = true;
    faux.addEventListener("click", verif, false)
    faux.result = false;
}

async function verif(event) {
    const result = event.currentTarget.result
    const quest = document.getElementById('question');
    const vrai = document.getElementById("vrai");
    const faux = document.getElementById("faux");

    vrai.disabled = true;
    faux.disabled = true;

    console.log(result + questions.at(i)[1] + i);

    color_barre.style.width = (i + 1) * 100 / questions.length + '%';

    quest.innerHTML = '<span>' + (result === questions.at(i)[1] ? 'Vrai !' : 'Faux !') + '</span>';

    // await sleep(2000);

    if (i === questions.length - 1) {
        quest.innerHTML = '<span> Vous avez eu ' + cptBonnesReponses + '/' + questions.length + ' bonnes réponses ! </span>';
        const voiture = document.getElementById("voiture");
        voiture.animate([
                { transform: "translateX(0)" },
                { transform: "translateX(500%)" },
            ],
            4000,)

        await sleep(4000)

        voiture.hidden = true;
    }
    else {
        vrai.disabled = false;
        faux.disabled = false;

        if (result === questions.at(i)[1]) cptBonnesReponses++;

        ++i;
        quest.innerHTML = '<span>' + questions.at(i)[0] + '</span>';
    }
}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};