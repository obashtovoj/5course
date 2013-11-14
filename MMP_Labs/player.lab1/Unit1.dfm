object Form1: TForm1
  Left = 217
  Top = 137
  Width = 545
  Height = 305
  Caption = 'Media Player'
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'Tahoma'
  Font.Style = []
  Menu = mm1
  OldCreateOrder = False
  PixelsPerInch = 96
  TextHeight = 13
  object MediaPlayer: TWindowsMediaPlayer
    Left = 0
    Top = 0
    Width = 529
    Height = 247
    Align = alClient
    TabOrder = 0
    ControlData = {
      000300000800000000000500000000000000F03F030000000000050000000000
      0000000008000200000000000300010000000B00FFFF0300000000000B00FFFF
      08000200000000000300320000000B00000008000A000000660075006C006C00
      00000B0000000B0000000B00FFFF0B00FFFF0B00000008000200000000000800
      020000000000080002000000000008000200000000000B000000AC3600008719
      0000}
  end
  object mm1: TMainMenu
    Left = 416
    Top = 136
    object File1: TMenuItem
      Caption = 'File'
      object Open1: TMenuItem
        Caption = 'Open'
        OnClick = Open1Click
      end
      object N1: TMenuItem
        Caption = '-'
      end
      object Exit1: TMenuItem
        Caption = 'Exit'
        OnClick = Exit1Click
      end
    end
    object Properties1: TMenuItem
      Caption = 'Properties'
      object StartStop1: TMenuItem
        Caption = 'Start/Stop'
        OnClick = StartStop1Click
      end
      object Pause1: TMenuItem
        Caption = 'Pause'
        OnClick = Pause1Click
      end
    end
    object AboutProgram1: TMenuItem
      Caption = 'About ...'
      OnClick = AboutProgram1Click
    end
  end
  object dlgOpenMediaPlayer: TOpenDialog
    Filter = 'WAVE|*wav|MKV|*mkv|avi|*avi|mp-3|*mp3'
    Left = 256
    Top = 56
  end
end
