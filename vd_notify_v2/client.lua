RegisterNetEvent("notificaridrastica")
AddEventHandler("notificaridrastica", function(title, message, typee)
    SendNUIMessage({
        action = "notify",
        title = title,
        message = message,
        type = typee,
        id = math.random(1, 1000000000)
    })
end)

RegisterCommand("test", function(player, args)
    SendNUIMessage({
        action = "notify",
        title = args[1],
        message = args[2],
        type = args[3],
        id = math.random(1, 1000000000)
    })
end)