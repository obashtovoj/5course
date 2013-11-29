unit Unit_RTF;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs, Vcl.StdCtrls, JvExStdCtrls, JvRichEdit;

type
  TRTFForm = class(TForm)
    JvRichEdit1: TJvRichEdit;
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  RTFForm: TRTFForm;

implementation

{$R *.dfm}

end.
