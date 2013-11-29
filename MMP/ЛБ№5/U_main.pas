unit U_main;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, acImage,U_child, sSkinProvider, sSkinManager, ExtDlgs, sDialogs, Menus,U_Convert;

type
  TF_main = class(TForm)
    sknmngr1: TsSkinManager;
    sknprvdr1: TsSkinProvider;
    mm_main: TMainMenu;
    mn_file: TMenuItem;
    mni_File_Open: TMenuItem;
    mni_File_close_all: TMenuItem;
    mni_File_Exit: TMenuItem;
    dlg_img_open: TOpenPictureDialog;
    mni_Convert: TMenuItem;
    mni_Window: TMenuItem;
    mni_Cascade: TMenuItem;
    mni_Tile: TMenuItem;
    procedure CreateChildForm(const childName : string);
    procedure mni_File_OpenClick(Sender: TObject);
    procedure mni_File_close_allClick(Sender: TObject);
    procedure closeAllChildren;
    procedure mni_File_ExitClick(Sender: TObject);
    procedure mni_ConvertClick(Sender: TObject);
    procedure prepereConvertForm(fileName:String);
    procedure mni_CascadeClick(Sender: TObject);
    procedure mni_TileClick(Sender: TObject);

  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  F_main: TF_main;
{Dynamically create child form }

implementation

{$R *.dfm}

{ TF_main }

{Dynamically create child form }
procedure TF_main.CreateChildForm(const childName: string);
var Child: TF_child;
begin
  Child := TF_child.Create(Application);
  Child.Caption := childName;
  Child.LoadImage(childName);
end;

procedure TF_main.mni_File_OpenClick(Sender: TObject);
var i :integer;
begin
  if dlg_img_open.Execute then
    for i:=0 to dlg_img_open.Files.Count-1 do
    begin
        CreateChildForm(dlg_img_open.Files[i]);
    end;
end;

procedure TF_main.mni_File_close_allClick(Sender: TObject);
begin
  closeAllChildren;
end;


procedure TF_main.closeAllChildren;
var  i:Integer;
begin
  for i:=0 to MDIChildCount - 1 do
      MDIChildren[i].Close;

end;

procedure TF_main.mni_File_ExitClick(Sender: TObject);
begin
  closeAllChildren;
  Close;
end;

procedure TF_main.mni_ConvertClick(Sender: TObject);
begin
  if not(ActiveMDIChild = nil) then
    if ActiveMDIChild is TF_child then
    begin
     prepereConvertForm(TF_child(ActiveMDIChild).Caption);
     F_conver.ShowModal;
    end;
end;

procedure TF_main.prepereConvertForm(fileName: String);
var baseFileName,baseFileExt,ConverName,ConverPath:String;
begin
 baseFileName := ExtractFileName(fileName);
 baseFileExt  := ExtractFileExt(fileName);
 ConverName := baseFileName;
 ConverPath := ExtractFilePath(fileName);
 Delete(ConverName,Length(baseFileName)- Length(baseFileExt)+1,Length(baseFileExt));

 F_conver.edt_base_Name.Text := fileName;
 F_conver.edt_converted_Name.Text := ConverPath + ConverName;
 if baseFileExt = '.bmp' then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=True;
   F_conver.btn_bmp2ico.Enabled:=True;
   F_conver.btn_bmp2emf.Enabled:=True;
   F_conver.btn_bmp2wmf.Enabled:=True;
   F_conver.btn_bmp2png.Enabled:=True;
   F_conver.btn_bmp2rtf.Enabled:=True;

   F_conver.btn_jpeg2bmp.Enabled:=False;
   F_conver.btn_ico2bmp.Enabled:=False;
   F_conver.btn_emf2bmp.Enabled:=False;
   F_conver.btn_wmf2bmp.Enabled:=False;
   F_conver.btn_png2bmp.Enabled:=False;
 end;
 if (baseFileExt = '.jpg') or (baseFileExt = '.jpeg') or (baseFileExt = '.JPG') then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=False;
   F_conver.btn_bmp2ico.Enabled:=False;
   F_conver.btn_bmp2emf.Enabled:=False;
   F_conver.btn_bmp2wmf.Enabled:=False;
   F_conver.btn_bmp2png.Enabled:=False;
   F_conver.btn_bmp2rtf.Enabled:=False;

   F_conver.btn_jpeg2bmp.Enabled:=True;
   F_conver.btn_ico2bmp.Enabled:=False;
   F_conver.btn_emf2bmp.Enabled:=False;
   F_conver.btn_wmf2bmp.Enabled:=False;
   F_conver.btn_png2bmp.Enabled:=False;
 end;
 if baseFileExt = '.emf' then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=False;
   F_conver.btn_bmp2ico.Enabled:=False;
   F_conver.btn_bmp2emf.Enabled:=False;
   F_conver.btn_bmp2wmf.Enabled:=False;
   F_conver.btn_bmp2png.Enabled:=False;
   F_conver.btn_bmp2rtf.Enabled:=False;

   F_conver.btn_jpeg2bmp.Enabled:=False;
   F_conver.btn_ico2bmp.Enabled:=False;
   F_conver.btn_emf2bmp.Enabled:=True;
   F_conver.btn_wmf2bmp.Enabled:=False;
   F_conver.btn_png2bmp.Enabled:=False
 end;
 if baseFileExt = '.wmf' then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=False;
   F_conver.btn_bmp2ico.Enabled:=False;
   F_conver.btn_bmp2emf.Enabled:=False;
   F_conver.btn_bmp2wmf.Enabled:=False;
   F_conver.btn_bmp2png.Enabled:=False;
   F_conver.btn_bmp2rtf.Enabled:=False;

   F_conver.btn_jpeg2bmp.Enabled:=False;
   F_conver.btn_ico2bmp.Enabled:=False;
   F_conver.btn_emf2bmp.Enabled:=False;
   F_conver.btn_wmf2bmp.Enabled:=True;
   F_conver.btn_png2bmp.Enabled:=False
 end;
 if baseFileExt = '.ico' then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=False;
   F_conver.btn_bmp2ico.Enabled:=False;
   F_conver.btn_bmp2emf.Enabled:=False;
   F_conver.btn_bmp2wmf.Enabled:=False;
   F_conver.btn_bmp2png.Enabled:=False;
   F_conver.btn_bmp2rtf.Enabled:=False;

   F_conver.btn_jpeg2bmp.Enabled:=False;
   F_conver.btn_ico2bmp.Enabled:=True;
   F_conver.btn_emf2bmp.Enabled:=False;
   F_conver.btn_wmf2bmp.Enabled:=False;
   F_conver.btn_png2bmp.Enabled:=False
 end;
 if baseFileExt = '.png' then
 begin
   F_conver.btn_bmp2Jpeg.Enabled:=False;
   F_conver.btn_bmp2ico.Enabled:=False;
   F_conver.btn_bmp2emf.Enabled:=False;
   F_conver.btn_bmp2wmf.Enabled:=False;
   F_conver.btn_bmp2png.Enabled:=False;
   F_conver.btn_bmp2rtf.Enabled:=False;

   F_conver.btn_jpeg2bmp.Enabled:=False;
   F_conver.btn_ico2bmp.Enabled:=False;
   F_conver.btn_emf2bmp.Enabled:=False;
   F_conver.btn_wmf2bmp.Enabled:=false;
   F_conver.btn_png2bmp.Enabled:=True;
 end;
end;

procedure TF_main.mni_CascadeClick(Sender: TObject);
begin
 Cascade;
end;

procedure TF_main.mni_TileClick(Sender: TObject);
begin
  Tile;
end;

end.
