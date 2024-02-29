local notifyActive = true

RegisterNetEvent('c2k_notify:send')
AddEventHandler('c2k_notify:send', function(message)
    if notifyActive then
        SendNUIMessage({
            name = 'addNotification',
            type = nil,
            message = message
        })
    else
    print("c2k_notify DISABILITATO.")
    end
end)

AddEventHandler("onResourceStart", function(resourceName)
    if GetCurrentResourceName() == resourceName then
        TriggerEvent('c2k_notify:send', "Risorsa delle Notifica Riavviata. Notifiche pronte.")
    end
end)