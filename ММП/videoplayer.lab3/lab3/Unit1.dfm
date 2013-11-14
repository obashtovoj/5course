object Form1: TForm1
  Left = 329
  Top = 128
  Caption = 'Media Player'
  ClientHeight = 427
  ClientWidth = 662
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  OldCreateOrder = False
  OnCreate = FormCreate
  OnResize = FormResize
  PixelsPerInch = 96
  TextHeight = 13
  object MediaPlayer1: TMediaPlayer
    Left = 152
    Top = 545
    Width = 85
    Height = 30
    Align = alCustom
    VisibleButtons = [btPlay, btPause, btStop]
    Visible = False
    TabOrder = 0
    OnNotify = MediaPlayer1Notify
  end
  object TrackBar1: TTrackBar
    Left = 0
    Top = 368
    Width = 662
    Height = 59
    Align = alBottom
    Max = 100
    TabOrder = 1
    OnChange = TrackBar1Change
  end
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 662
    Height = 302
    Align = alClient
    TabOrder = 2
    object StatusBar1: TStatusBar
      Left = 1
      Top = 1
      Width = 660
      Height = 19
      Align = alTop
      Panels = <
        item
          Width = 50
        end
        item
          Width = 50
        end>
    end
  end
  object Panel2: TPanel
    Left = 0
    Top = 302
    Width = 662
    Height = 66
    Align = alBottom
    TabOrder = 3
    object SpeedButton1: TSpeedButton
      Left = 2
      Top = 25
      Width = 151
      Height = 36
      Caption = 'Play'
      OnClick = SpeedButton1Click
    end
    object SpeedButton2: TSpeedButton
      Left = 2
      Top = 0
      Width = 151
      Height = 25
      Caption = 'Open'
      OnClick = SpeedButton2Click
    end
  end
  object OpenDialog1: TOpenDialog
    Left = 8
  end
  object Timer1: TTimer
    Enabled = False
    Interval = 500
    OnTimer = Timer1Timer
    Left = 8
    Top = 48
  end
  object PopupMenu1: TPopupMenu
    Left = 696
    Top = 112
    object C1: TMenuItem
      Caption = #1057#1090#1072#1088#1090
      OnClick = C1Click
    end
    object N2: TMenuItem
      Caption = #1054#1090#1082#1088#1099#1090#1100
      OnClick = N2Click
    end
  end
  object TimerResize: TTimer
    Enabled = False
    Interval = 10
    OnTimer = TimerResizeTimer
    Left = 8
    Top = 96
  end
end
