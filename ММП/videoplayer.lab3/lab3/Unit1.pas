unit Unit1;

interface

uses
  Winapi.Windows, Winapi.Messages, System.SysUtils, System.Variants, System.Classes, Vcl.Graphics,
  Vcl.Controls, Vcl.Forms, Vcl.Dialogs,MMSystem, Vcl.MPlayer, Vcl.Buttons,
  Vcl.ComCtrls, Vcl.StdCtrls, ExtCtrls, Vcl.Menus, Vcl.AppEvnts, Winapi.shellapi;

 Type
   TPanel = class (ExtCtrls.TPanel)
    public
    property Canvas;
  end;

type
  TForm1 = class(TForm)
    SpeedButton1: TSpeedButton;
    MediaPlayer1: TMediaPlayer;
    SpeedButton2: TSpeedButton;
    OpenDialog1: TOpenDialog;
    TrackBar1: TTrackBar;
    Timer1: TTimer;
    PopupMenu1: TPopupMenu;
    C1: TMenuItem;
    N2: TMenuItem;
    Panel1: TPanel;
    Panel2: TPanel;
    TimerResize: TTimer;
    StatusBar1: TStatusBar;
    procedure FormCreate(Sender: TObject);
    procedure SpeedButton2Click(Sender: TObject);
    procedure SpeedButton1Click(Sender: TObject);
    procedure MediaPlayer1Notify(Sender: TObject);
    procedure TrackBar1Change(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure C1Click(Sender: TObject);
    procedure N2Click(Sender: TObject);
    procedure TimerResizeTimer(Sender: TObject);
    procedure FormResize(Sender: TObject);
  private
        procedure WMDropFiles(var Msg: TWMDropFiles); message WM_DROPFILES;
  public
    { Public declarations }
  end;


var
  Form1: TForm1;
  C_Hr, C_Min, C_Sec: Integer;
implementation

{$R *.dfm}



procedure TForm1.C1Click(Sender: TObject);
begin
  SpeedButton1Click(sender);
end;

procedure TForm1.FormCreate(Sender: TObject);
begin
MediaPlayer1.Display := Form1.Panel1;
   SpeedButton1.GroupIndex := 1;
   SpeedButton1.AllowAllUp := True;
  DragAcceptFiles(Form1.Handle, True);
end;
procedure TForm1.FormResize(Sender: TObject);
begin
 TimerResize.Enabled:=true;
end;
  // возвращаем размер видео
procedure DimAvi(f: string; var w,h: integer);
var
    fst: TFileStream;
        header: record
        RIFF: array[1..4] of char;
        nu1:  array[1..5] of LongInt;
        AVIH: array[1..4] of char;
        nu2:  array[1..9] of LongInt;
        Width:  LongInt;
        Height: LongInt;
    end;

begin
    fst := TFileStream.Create(f,fmOpenRead);
    fst.Read(header,sizeof(header));
    w := header.Width;
    h := header.Height;
    fst.Destroy;
end;




procedure TForm1.MediaPlayer1Notify(Sender: TObject);
begin
  if (MediaPlayer1.Mode = mpStopped )
     and SpeedButton1.Down
  then
     SpeedButton1.Down := False; // "отжать" кнопку Play
end;


procedure TForm1.N2Click(Sender: TObject);
begin
  SpeedButton2Click(sender);
end;

procedure TForm1.SpeedButton1Click(Sender: TObject);
begin
Timer1.Enabled := True;
MediaPlayer1.DisplayRect := Panel1.Canvas.ClipRect;
if SpeedButton1.Down  then
    begin
      Timer1.Enabled:=true;
      MediaPlayer1.Play;
      SpeedButton1.Hint := 'Stop';
    end
    else begin

      MediaPlayer1.Stop;
      SpeedButton1.Hint := 'Play';
    end;

end;

procedure TForm1.SpeedButton2Click(Sender: TObject);
var
    top,left: integer; // левый верхний угол "экрана"
    width,height: integer; // размер экрана
    mw,mh: integer; // максимально возможный размер экрана
    kh,kw: real;    // коэффициенты масштабирования по высоте и длине
    k: real;        // коэффициенты масштабирования

begin
    OpenDialog1.Title := 'Выбор клипа';
    if not OpenDialog1.Execute
      then exit;
      width := 0;
      height := 0;
      DimAvi(OpenDialog1.FileName,width,height);
    mh:=SpeedButton1.Top - 10;
    mw:=Form1.ClientWidth;
    if mh > height
        then kh :=1
        else kh := mh/height;
    if mw > width
        then kw :=1
        else kw := mw/width;
    if kw < kh
        then k := kw
        else k := kh;
    width  := Round(width * k);
    height := Round(Height * k);

    left := (Form1.ClientWidth - width ) div 2;
    top := 10;

    MediaPlayer1.FileName := OpenDialog1.FileName;
    MediaPlayer1.Open;
    MediaPlayer1.TimeFormat:=tfMilliseconds;
    TrackBar1.Min:=0;
    TrackBar1.Position:=0;
    TrackBar1.Max:= MediaPlayer1.Length div 1000;
    C_Hr := MediaPlayer1.Length div 3600000; // часы
    C_Min :=(MediaPlayer1.Length mod 3600000) div 60000; // минуты
    C_Sec:=((MediaPlayer1.Length mod 3600000) mod 60000)div 1000; // секунды
    MediaPlayer1.DisplayRect := Rect(left,top,width,height);
    SpeedButton1.Enabled := True;
end;

procedure TForm1.Timer1Timer(Sender: TObject);
Var
Hr, Min,Sec: Integer;
begin
    TrackBar1.OnChange:=nil;
    TrackBar1.Position:=MediaPlayer1.Position div 1000;
    TrackBar1.OnChange:=TrackBar1Change;
Hr := MediaPlayer1.Position div 3600000; // часы
 Min :=(MediaPlayer1.Position mod 3600000) div 60000; // минуты
 Sec:=((MediaPlayer1.Position mod 3600000) mod 60000)div 1000; // секунды
StatusBar1.Panels[1].Text:= Format('%.2d:%.2d:%.2d / %.2d:%.2d:%.2d',[Hr, Min, Sec, C_Hr, C_Min, C_Sec]);

  end;


procedure TForm1.TimerResizeTimer(Sender: TObject);
begin
 MediaPlayer1.DisplayRect:=Rect(0,0,panel1.Width,panel1.Height);
end;


procedure TForm1.TrackBar1Change(Sender: TObject);
begin
 MediaPlayer1.TimeFormat:=tfMilliseconds;
  If TrackBar1.Position <> mediaplayer1.Position div 1000 then
   begin
    MediaPlayer1.Pause;
    MediaPlayer1.TimeFormat:=tfMilliseconds;
    mediaplayer1.Position:=TrackBar1.Position * 1000;
    mediaplayer1.Play;
   end;

end;



procedure TForm1.WMDropFiles(var Msg: TWMDropFiles);
var
  i: integer;//счетчик файлов
  CountFile: integer;//Количество файлов
  size: integer;//длина строки, содержащей путь к файлу
  Filename: PChar; //указатель на имя файла
  width,height : integer;
begin
       CountFile := DragQueryFile(Msg.Drop, $FFFFFFFF, Filename, 255);
           size := DragQueryFile(Msg.Drop, i , nil, 0)+1;
    //выделяем память под строку с именем файла
    Filename:= StrAlloc(size);
      DragQueryFile(Msg.Drop,i , Filename, size);
      DimAvi(Filename,width,height);
    MediaPlayer1.FileName := Filename;
    MediaPlayer1.Open;
    MediaPlayer1.DisplayRect := Rect(left,top,width,height);
    SpeedButton1.Enabled := True;
end;

end.
