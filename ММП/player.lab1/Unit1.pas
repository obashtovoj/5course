unit Unit1;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, Menus, OleCtrls, WMPLib_TLB,Unit3;

type
  TForm1 = class(TForm)
    MediaPlayer: TWindowsMediaPlayer;
    mm1: TMainMenu;
    File1: TMenuItem;
    Open1: TMenuItem;
    N1: TMenuItem;
    Exit1: TMenuItem;
    dlgOpenMediaPlayer: TOpenDialog;
    Properties1: TMenuItem;
    StartStop1: TMenuItem;
    Pause1: TMenuItem;
    AboutProgram1: TMenuItem;
    procedure Open1Click(Sender: TObject);
    procedure Exit1Click(Sender: TObject);
    procedure StartStop1Click(Sender: TObject);
    procedure Pause1Click(Sender: TObject);
    procedure AboutProgram1Click(Sender: TObject);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  Form1: TForm1;

implementation

{$R *.dfm}

procedure TForm1.Open1Click(Sender: TObject);
begin
 if dlgOpenMediaPlayer.Execute then
begin 
      MediaPlayer.URL:=dlgOpenMediaPlayer.FileName;
Form1.Caption:='Track - '+ExtractFileName(dlgOpenMediaPlayer.FileName);
end;

end;

procedure TForm1.Exit1Click(Sender: TObject);
begin
Self.Close;
end;

procedure TForm1.StartStop1Click(Sender: TObject);
begin
if MediaPlayer.PlayState =wmppsPlaying then 
    MediaPlayer.Controls.Stop 
else 
    MediaPlayer.Controls.Play;

end;

procedure TForm1.Pause1Click(Sender: TObject);
begin
if MediaPlayer.PlayState =wmppsPlaying then 
    MediaPlayer.Controls.Pause;

end;

procedure TForm1.AboutProgram1Click(Sender: TObject);
begin
 AboutBox.ShowModal;
end;

end.
