export default {
    whatsnew: {
        title: 'Mises à jour',
        version: 'dans la version {{version}}',
        continue: 'Continuer',
    },
    onboarding: {
        links: {
            privacy: 'Politique de confidentialité',
            imprint: 'Mentions légales',
        },
        page1: {
            title: 'Bienvenue dans\nNeuland Next',
            subtitle: 'Balayez pour découvrir',
        },
        page2: {
            title: 'Tout en un seul endroit',
            text:
                `Neuland Next réunit toutes les informations importantes sur vos études dans une seule appli.\n\n` +
                `Personnalisez votre tableau de bord selon vos besoins pour recevoir une vue d’ensemble sur votre emploi du temps, vos notes et bien plus encore.\n\n` +
                `La carte interactive montre tous les endroits importants sur le campus.`,
        },
        page3: {
            title: 'Confidentialité',
            text:
                `Neuland Next est un projet de code source ouvert et est développé par des étudiant·es pour des étudiant·es.\n\n` +
                `En tant qu’alternative à l’appli officielle de la THI nous protégeons strictement vos données. ` +
                `L’appli n’utilise que l’API officielle et chiffrée, qui es fournie par l’université.\n\n` +
                `Par conséquence ni nous, ni des tiers sont capables d’acceder à vos donnés ou votre mot de passe.`,
        },
        navigation: {
            next: 'Continuer',
            skip: 'Sauter',
        },
    },
    login: {
        title: 'Connexion avec le compte THI',
        toast: 'Vous êtes connecté·e',
        alert: {
            error: {
                title: 'Erreur de connexion',
                wrongCredentials: 'Vos identifiants sont incorrectes.',
                generic:
                    'Une erreur s’est produite pendant la connexion au serveur.',
                backend:
                    'Le backend de l’université n’est pas disponible en ce moment. Veuillez réessayer plus tard.',
                noConnection: 'La requête est échouée.',
            },
            restored: {
                title: 'Identifiants récupéres',
                message:
                    'Des anciens identifiants ont été trouvés dans le porte-clés d’iOS',
            },
        },
        username: 'Nom d’utilisateur/d’utilisatrice',
        password: 'Mot de passe',
        button: 'Connexion',
        guest: 'Continuer en tant qu’invité·e',
    },
}
