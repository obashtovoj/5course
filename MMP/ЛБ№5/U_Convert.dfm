object F_conver: TF_conver
  Left = 500
  Top = 284
  BorderStyle = bsSizeToolWin
  Caption = 'Convert'
  ClientHeight = 300
  ClientWidth = 454
  Color = clBtnFace
  Font.Charset = DEFAULT_CHARSET
  Font.Color = clWindowText
  Font.Height = -11
  Font.Name = 'MS Sans Serif'
  Font.Style = []
  OldCreateOrder = False
  Position = poMainFormCenter
  PixelsPerInch = 96
  TextHeight = 13
  object lbl1: TsLabel
    Left = 8
    Top = 8
    Width = 49
    Height = 16
    Caption = 'Original:'
    ParentFont = False
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'MS Sans Serif'
    Font.Style = []
  end
  object lbl2: TsLabel
    Left = 8
    Top = 40
    Width = 65
    Height = 16
    Caption = 'Converted:'
    ParentFont = False
    Font.Charset = DEFAULT_CHARSET
    Font.Color = clWindowText
    Font.Height = -13
    Font.Name = 'MS Sans Serif'
    Font.Style = []
  end
  object edt_base_Name: TsEdit
    Tag = -1
    Left = 79
    Top = 7
    Width = 369
    Height = 21
    AutoSelect = False
    Color = clSilver
    Font.Charset = DEFAULT_CHARSET
    Font.Color = 1447447
    Font.Height = -11
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
    ReadOnly = True
    TabOrder = 0
    SkinData.SkinSection = 'EDIT'
    BoundLabel.Indent = 0
    BoundLabel.Font.Charset = DEFAULT_CHARSET
    BoundLabel.Font.Color = clWindowText
    BoundLabel.Font.Height = -11
    BoundLabel.Font.Name = 'MS Sans Serif'
    BoundLabel.Font.Style = []
    BoundLabel.Layout = sclLeft
    BoundLabel.MaxWidth = 0
    BoundLabel.UseSkinColor = True
  end
  object edt_converted_Name: TsEdit
    Left = 80
    Top = 38
    Width = 369
    Height = 21
    Color = clSilver
    Font.Charset = DEFAULT_CHARSET
    Font.Color = 1447447
    Font.Height = -11
    Font.Name = 'MS Sans Serif'
    Font.Style = []
    ParentFont = False
    ReadOnly = True
    TabOrder = 1
    SkinData.SkinSection = 'EDIT'
    BoundLabel.Indent = 0
    BoundLabel.Font.Charset = DEFAULT_CHARSET
    BoundLabel.Font.Color = clWindowText
    BoundLabel.Font.Height = -11
    BoundLabel.Font.Name = 'MS Sans Serif'
    BoundLabel.Font.Style = []
    BoundLabel.Layout = sclLeft
    BoundLabel.MaxWidth = 0
    BoundLabel.UseSkinColor = True
  end
  object btn_bmp2Jpeg: TsButton
    Left = 8
    Top = 72
    Width = 81
    Height = 33
    Caption = '*.bmp to *.jpeg'
    TabOrder = 2
    OnClick = btn_bmp2JpegClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_bmp2ico: TsButton
    Left = 8
    Top = 189
    Width = 81
    Height = 33
    Caption = '*.bmp to *.ico'
    TabOrder = 3
    OnClick = btn_bmp2icoClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_bmp2emf: TsButton
    Left = 8
    Top = 110
    Width = 81
    Height = 33
    Caption = '*.bmp to *.emf'
    TabOrder = 4
    OnClick = btn_bmp2emfClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_bmp2wmf: TsButton
    Left = 8
    Top = 149
    Width = 81
    Height = 33
    Caption = '*.bmp to *.wmf'
    TabOrder = 5
    OnClick = btn_bmp2wmfClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_jpeg2bmp: TsButton
    Left = 96
    Top = 72
    Width = 81
    Height = 33
    Caption = '*.jpeg to *.bmp '
    TabOrder = 6
    OnClick = btn_jpeg2bmpClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_emf2bmp: TsButton
    Left = 96
    Top = 111
    Width = 81
    Height = 33
    Caption = '*.emf to *.bmp'
    TabOrder = 7
    OnClick = btn_emf2bmpClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_wmf2bmp: TsButton
    Left = 97
    Top = 149
    Width = 81
    Height = 33
    Caption = '*.wmf to *.bmp'
    TabOrder = 8
    OnClick = btn_wmf2bmpClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_ico2bmp: TsButton
    Left = 98
    Top = 187
    Width = 81
    Height = 33
    Caption = '*.ico to *-bmp'
    TabOrder = 9
    OnClick = btn_ico2bmpClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_bmp2png: TsButton
    Left = 8
    Top = 226
    Width = 81
    Height = 33
    Caption = '*.bmp to *.png'
    TabOrder = 10
    OnClick = btn_bmp2pngClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_png2bmp: TsButton
    Left = 96
    Top = 226
    Width = 81
    Height = 33
    Caption = '*.png to *.bmp'
    TabOrder = 11
    OnClick = btn_png2bmpClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_bmp2rtf: TsButton
    Left = 8
    Top = 266
    Width = 81
    Height = 33
    Caption = '*.bmp to *.rtf'
    TabOrder = 12
    OnClick = btn_bmp2rtfClick
    SkinData.SkinSection = 'BUTTON'
  end
  object btn_select_Dir: TsButton
    Left = 296
    Top = 64
    Width = 155
    Height = 25
    Caption = 'Select Convert Directory'
    TabOrder = 13
    OnClick = btn_select_DirClick
    SkinData.SkinSection = 'BUTTON'
  end
  object sknprvdr1: TsSkinProvider
    AddedTitle.Font.Charset = DEFAULT_CHARSET
    AddedTitle.Font.Color = clNone
    AddedTitle.Font.Height = -11
    AddedTitle.Font.Name = 'MS Sans Serif'
    AddedTitle.Font.Style = []
    SkinData.SkinSection = 'FORM'
    TitleButtons = <>
    Left = 152
    Top = 8
  end
end
