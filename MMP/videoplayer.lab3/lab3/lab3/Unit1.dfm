object Form1: TForm1
  Left = 0
  Top = 0
  Caption = 'Media Player'
  ClientHeight = 552
  ClientWidth = 790
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
    Top = 527
    Width = 790
    Height = 25
    Align = alBottom
    TabOrder = 1
    OnChange = TrackBar1Change
  end
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 790
    Height = 488
    Align = alClient
    TabOrder = 2
  end
  object Panel2: TPanel
    Left = 0
    Top = 488
    Width = 790
    Height = 39
    Align = alBottom
    TabOrder = 3
    ExplicitTop = 482
    object SpeedButton1: TSpeedButton
      Left = 352
      Top = 15
      Width = 65
      Height = 22
      Caption = 'Play'
      OnClick = SpeedButton1Click
    end
    object SpeedButton2: TSpeedButton
      Left = 280
      Top = 0
      Width = 212
      Height = 16
      Caption = 'Open'
      OnClick = SpeedButton2Click
    end
    object Label5: TLabel
      Left = 21
      Top = 6
      Width = 3
      Height = 13
    end
    object Label2: TLabel
      Left = 99
      Top = 6
      Width = 3
      Height = 13
    end
    object Label3: TLabel
      Left = 120
      Top = 6
      Width = 3
      Height = 13
    end
    object Label4: TLabel
      Left = 8
      Top = 6
      Width = 3
      Height = 13
    end
    object Label1: TLabel
      Left = 82
      Top = 5
      Width = 4
      Height = 13
      Caption = ':'
    end
  end
  object OpenDialog1: TOpenDialog
    Left = 8
  end
  object Timer1: TTimer
    Enabled = False
    Interval = 100
    OnTimer = Timer1Timer
    Left = 72
    Top = 24
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
    Left = 152
  end
end
