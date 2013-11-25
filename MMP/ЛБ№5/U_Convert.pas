unit U_Convert;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms, FileCtrl,
  Dialogs, StdCtrls, sGroupBox, sSkinProvider, sButton, sLabel, sEdit, U_child;

type
  TF_conver = class(TForm)
    sknprvdr1: TsSkinProvider;
    edt_base_Name: TsEdit;
    lbl1: TsLabel;
    lbl2: TsLabel;
    edt_converted_Name: TsEdit;
    btn_bmp2Jpeg: TsButton;
    btn_bmp2ico: TsButton;
    btn_bmp2emf: TsButton;
    btn_bmp2wmf: TsButton;
    btn_jpeg2bmp: TsButton;
    btn_emf2bmp: TsButton;
    btn_wmf2bmp: TsButton;
    btn_ico2bmp: TsButton;
    btn_bmp2png: TsButton;
    btn_png2bmp: TsButton;
    btn_bmp2rtf: TsButton;
    btn_select_Dir: TsButton;
    procedure btn_bmp2JpegClick(Sender: TObject);
    procedure btn_bmp2emfClick(Sender: TObject);
    procedure btn_bmp2wmfClick(Sender: TObject);
    procedure btn_bmp2icoClick(Sender: TObject);
    procedure btn_jpeg2bmpClick(Sender: TObject);
    procedure btn_emf2bmpClick(Sender: TObject);
    procedure btn_wmf2bmpClick(Sender: TObject);
    procedure btn_ico2bmpClick(Sender: TObject);
    procedure btn_bmp2pngClick(Sender: TObject);
    procedure btn_png2bmpClick(Sender: TObject);
    procedure btn_bmp2rtfClick(Sender: TObject);
    procedure btn_select_DirClick(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  F_conver: TF_conver;

implementation
uses  U_main;

{$R *.dfm}

procedure TF_conver.btn_bmp2JpegClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2jpeg(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.jpeg');
end;

procedure TF_conver.btn_bmp2emfClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2emf(edt_base_Name.Text,edt_converted_Name.Text, True);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.emf');
end;

procedure TF_conver.btn_bmp2wmfClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2emf(edt_base_Name.Text,edt_converted_Name.Text,False);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.wmf');
end;

procedure TF_conver.btn_bmp2icoClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2ico(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.ico');
end;

procedure TF_conver.btn_jpeg2bmpClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).jpeg2bmp(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.bmp');
end;

procedure TF_conver.btn_emf2bmpClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).emf2bmp(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.bmp');
end;

procedure TF_conver.btn_wmf2bmpClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).emf2bmp(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.bmp');
end;

procedure TF_conver.btn_ico2bmpClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).ico2bmp(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.bmp');
end;

procedure TF_conver.btn_bmp2pngClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2png(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.png');
end;

procedure TF_conver.btn_png2bmpClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).png2bmp(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
  F_main.CreateChildForm(edt_converted_Name.Text+'.bmp');
end;

procedure TF_conver.btn_bmp2rtfClick(Sender: TObject);
begin
  TF_child(ActiveMDIChild).bmp2rtf(edt_base_Name.Text,edt_converted_Name.Text);
  ShowMessage('Done!');
end;


procedure TF_conver.btn_select_DirClick(Sender: TObject);
var
  options : TSelectDirOpts;
  chosenDirectory : string;
  conver_name:string;
begin
  conver_name := ExtractFileName(edt_converted_Name.text);
  chosenDirectory := ExtractFileDir(edt_converted_Name.Text);
  if SelectDirectory(chosenDirectory, [sdAllowCreate, sdPerformCreate, sdPrompt], 0)then
    edt_converted_Name.Clear;
    edt_converted_Name.Text:= chosenDirectory+'\'+conver_name;
end;

end.
