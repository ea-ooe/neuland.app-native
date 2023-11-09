export default {
    toast: {
        clipboard: 'copié dans le presse-papiers',
    },
    error: {
        refresh:
            'Une erreur s’est produite pendant le chargement des données.\nPour réessayer, veuillez balayer vers le bas.',
    },

    dates: {
        until: 'jusqu’à',
        notYet: 'Date inconnue',
        ends: 'se termine',
        today: 'Aujourd’hui',
        tomorrow: 'Demain',
        thisWeek: 'Cette semaine',
        nextWeek: 'La semaine prochaine',
    },
    pages: {
        calendar: {
            exams: {
                title: 'Examens',
                error: 'Pas d’étudiant·e',
                errorSubtitle: 'Veuillez vous connecter pour voir vos examens.',
            },
            calendar: {
                link: 'https://www.thi.de/en/international/studies/examination/semester-dates/',
                noData: {
                    title: 'Pas de données trouvées',
                    subtitle: 'Veuillez réessayer plus tard.',
                },
            },
            footer: {
                part1: 'Toute information présentée ici est fournie sous réserve d’erreur. Pour des informations définitives, ',
                part2: 'veuillez vous rendre sur le site-web de l’université.',
            },
        },
        lecturers: {
            results: 'Résultats de recherche',
            personal: 'Professeur·es personnel·les',
        },
        lecturer: {
            details: {
                title: 'Titre',
                organization: 'Organisation',
                function: 'Fonction',
            },
            contact: {
                room: 'Bureau',
                title: 'Contact',
                phone: 'Téléphone',
                office: 'Heures de rendez-vous',
                exam: 'Compulsation d’examen',
            },
        },
        exam: {
            details: {
                date: 'Date',
                room: 'Salle',
                seat: 'Siège',
                tools: 'Outils',
            },
            about: {
                title: 'À propos',
                type: 'Type',
                examiner: 'Examinateur·rice',
                registration: 'Inscrit·e',
                notes: 'Notes',
            },
        },
        map: {
            search: 'Cherchez « G », « W003 », « Toilette »',
            gf: 'RDC',
        },
        rooms: {
            options: {
                title: 'Options de recherche',
                building: 'Bâtiment',
                date: 'Date',
                time: 'Heure',
                duration: 'Durée',
            },
            results: 'Salles inoccupées',
        },
    },
}
