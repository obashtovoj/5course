object Form1: TForm1
  Left = 293
  Top = 104
  BorderIcons = [biSystemMenu]
  BorderStyle = bsSingle
  Caption = #1057#1086#1083#1085#1077#1095#1085#1072#1103' '#1089#1080#1089#1090#1077#1084#1072
  ClientHeight = 560
  ClientWidth = 720
  Color = cl3DLight
  TransparentColorValue = clWhite
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  OnClose = FormClose
  OnCreate = FormCreate
  OnDestroy = FormDestroy
  PixelsPerInch = 96
  TextHeight = 13
  object Image2: TImage
    Left = 512
    Top = 16
    Width = 177
    Height = 137
    Visible = False
  end
  object Image1: TImage
    Left = 0
    Top = 41
    Width = 720
    Height = 519
    Align = alClient
    AutoSize = True
  end
  object Image3: TImage
    Left = 504
    Top = 168
    Width = 758
    Height = 423
    Visible = False
  end
  object Panel1: TPanel
    Left = 0
    Top = 0
    Width = 720
    Height = 41
    Align = alTop
    TabOrder = 0
    object Label1: TLabel
      Left = 360
      Top = 8
      Width = 81
      Height = 16
      Caption = #1057#1074#1086#1103' '#1080#1082#1086#1085#1082#1072
      Font.Charset = DEFAULT_CHARSET
      Font.Color = clWindowText
      Font.Height = -13
      Font.Name = 'MS Sans Serif'
      Font.Style = []
      ParentFont = False
    end
    object Button1: TButton
      Left = 72
      Top = 8
      Width = 89
      Height = 25
      Caption = #1055#1091#1089#1082
      TabOrder = 0
      OnClick = Button1Click
    end
    object ComboBox1: TComboBox
      Left = 448
      Top = 8
      Width = 145
      Height = 21
      ItemHeight = 13
      ItemIndex = 1
      TabOrder = 1
      Text = #1047#1077#1084#1083#1103
      Items.Strings = (
        #1057#1086#1083#1085#1094#1077
        #1047#1077#1084#1083#1103
        #1057#1072#1090#1091#1088#1085
        #1070#1087#1080#1090#1077#1088
        #1042#1077#1085#1077#1088#1072
        #1052#1072#1088#1089
        #1052#1077#1088#1082#1091#1088#1080#1081
        #1053#1077#1087#1090#1091#1085
        #1059#1088#1072#1085
        #1055#1083#1091#1090#1086#1085)
    end
    object Button2: TButton
      Left = 608
      Top = 8
      Width = 75
      Height = 25
      Caption = #1047#1072#1075#1088#1091#1079#1080#1090#1100
      TabOrder = 2
      OnClick = Button2Click
    end
  end
  object Timer1: TTimer
    Interval = 50
    OnTimer = Timer1Timer
    Left = 40
    Top = 112
  end
  object OpenDialog1: TOpenDialog
    DefaultExt = '.bmp'
    Filter = #1048#1082#1086#1085#1082#1080' (*.bmp)|*.bmp'
    Left = 136
    Top = 104
  end
  object xpmnfst1: TXPManifest
    Left = 384
    Top = 72
  end
end
