document.addEventListener("DOMContentLoaded", () => {
    const scheduleData = [
        {
            "id": 1,
            "title": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 10,
            "currentParticipants": 8
        },
        {
            "id": 2,
            "title": "Пилатес",
            "time": "11:00 - 12:00",
            "maxParticipants": 15,
            "currentParticipants": 15
        },
        {
            "id": 3,
            "title": "Кроссфит",
            "time": "12:00 - 13:00",
            "maxParticipants": 12,
            "currentParticipants": 10
        }
    ];

    const scheduleContainer = document.getElementById("schedule");

    function renderSchedule() {
        scheduleContainer.innerHTML = "";
        scheduleData.forEach((session) => {
            const sessionElement = document.createElement("div");
            sessionElement.classList.add("card", "mb-3");

            sessionElement.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${session.title}</h5>
                    <p class="card-text">Время: ${session.time}</p>
                    <p class="card-text">Участники: ${session.currentParticipants} / ${session.maxParticipants}</p>
                    <button class="btn btn-primary" ${session.currentParticipants >= session.maxParticipants ? "disabled" : ""} onclick="register(${session.id})">Записаться</button>
                    <button class="btn btn-danger" onclick="unregister(${session.id})">Отменить запись</button>
                </div>
            `;

            scheduleContainer.appendChild(sessionElement);
        });
    }

    window.register = function (id) {
        const session = scheduleData.find(s => s.id === id);
        if (session && session.currentParticipants < session.maxParticipants) {
            session.currentParticipants++;
            renderSchedule();
        }
    };

    window.unregister = function (id) {
        const session = scheduleData.find(s => s.id === id);
        if (session && session.currentParticipants > 0) {
            session.currentParticipants--;
            renderSchedule();
        }
    };

    renderSchedule();
});