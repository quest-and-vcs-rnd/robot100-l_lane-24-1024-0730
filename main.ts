input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    50,
    50
    )
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # # # # #
        . # . # .
        `)
    quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(10, quest_Time_Units_Enum.Seconds)
    quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
    quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
    0,
    0
    )
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.showIcon(IconNames.Happy)
quest_Timer.quest_Set_ContinueCurrentState_CountdownTimer_Func(2, quest_Time_Units_Enum.Seconds)
quest_Motors.quest_Set_PowerMotorsViaBlueRedBlackPins_Func(
quest_PortGroup_BlueRedBlack_PortIds_Enum.S1_MotorLeft__S0_MotorRight,
0,
0
)
basic.showLeds(`
    . # . # .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
