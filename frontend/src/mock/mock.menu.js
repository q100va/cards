export default [
    {
        name: "Праздники",
        id: "holidays",
        href: "/holidays"
    },
    {
        name: "Списки",
        id: "lists",
        next: [
            {
                name: "Домики",
                id: "institutions",
                href: "/institutions"
            },
            {
                name: "Жители домиков",
                id: "seniors",
                href: "/seniors"
            },
            {
                name: "Координаторы домиков",
                id: "coordinators",
                href: "/coordinators"
            },
            {
                name: "Поздравляющие",
                id: "senders",
                href: "/senders"
            },
            {
                name: "Пользователи",
                id: "users",
                href: "/users"
            }
        ]
    },
    {
        name: "Заявки",
        id: "orders",
        href: "/orders"
    },
    {
        name: "Отчёты",
        id: "reports",
        href: "/reports"
    },
    {
        name: "Помощь",
        id: "help",
        next: [
            {
                name: "Быстрый старт",
                id: "help_quickstart",
                href: "/help/quickstart"
            },
            {
                name: "F.A.Q.",
                id: "help_faq",
                href: "/help/faq"
            }
        ]
    }
]