unit Unit1;
interface
uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, FileCtrl, StdCtrls, MPlayer, MMSystem, ComCtrls, Buttons, ExtCtrls,
  ShellAPI, Menus,JvComponentBase, JvID3v2Base, JvId3v2;
type
  TForm1 = class(TForm)
    ListBox1: TListBox;
    Button1: Tbutton;
    MediaPlayer1: TMediaPlayer;
    OpenDialog1: TOpenDialog;
    Button3: TButton;
    Memo1: TMemo;

    Panel1: TPanel;
    BitBtn1: TBitBtn;
    Stop: TBitBtn;
    Pause: TBitBtn;
    Play: TBitBtn;
    BitBtn2: TBitBtn;
    BitBtn3: TBitBtn;
    SaveDialog1: TSaveDialog;
    Timer1: TTimer;
    TrackBar2: TTrackBar;
    JvID3v21: TJvID3v2;
    LabelMin: TLabel;
    LabelSec: TLabel;
    procedure Button1Click(Sender: TObject);
    procedure ListBox1DblClick(Sender: TObject);
    procedure PlayClick(Sender: TObject);
    procedure StopClick(Sender: TObject);
    procedure PauseClick(Sender: TObject);
    procedure MediaPlayer1Notify(Sender: TObject);
    procedure BitBtn1Click(Sender: TObject);
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure Button3Click(Sender: TObject);
    procedure FormCreate(Sender: TObject);
    procedure BitBtn3Click(Sender: TObject);
    procedure BitBtn2Click(Sender: TObject);
    procedure Timer1Timer(Sender: TObject);
    procedure TrackBar2Change(Sender: TObject);
  private
  { }
  public

    Procedure GetTagMp3;
  { }
  end;

var
  Form1: TForm1;
  FileList:TStringList;
  cdaDisk: boolean = false;

implementation
{$R *.dfm}
 Procedure TForm1.GetTagMp3;
var
fn:String;
begin
fn:=MediaPlayer1.FileName;
JvID3v21.FileName:=Fn;
JvID3v21.Active:=True;
memo1.Clear;
memo1.Lines.Add('Файл: '+fn);
memo1.Lines.Add('--------------------------------');
memo1.Lines.Add('Заголовок: '+JvID3v21.Texts.Title);
memo1.Lines.Add('Исполнитель: '+Trim(JvID3v21.Texts.LeadArtist.Text));
memo1.Lines.Add('Альбом: '+JvID3v21.Texts.Album);
memo1.Lines.Add('Год: '+IntToStr(JvID3v21.Texts.Year));
memo1.Lines.Add('Жанр: '+Trim(JvID3v21.Texts.ContentType.Text));
end;

//возвращает букву 1-го привода CD-ROM или 0
function GetFirstCDROM: Char;
var
  w: dword;
  Root: string;
  i: integer;
begin
  w := GetLogicalDrives;
  Root := '#:\';
  for i := 0 to 25 do
  begin
    Root[1] := Char(Ord('A') + i);
    if (w and (1 shl i)) > 0 then
    if GetDriveType(Pchar(Root)) = DRIVE_CDROM then
    begin
      Result := Root[1];
      exit;
    end;
  end;
  Result:='0';
end;


//втсавлен ли диск
Function DiskInDrive(ADriveLetter : Char) : Boolean;
var
  SectorsPerCluster,
  BytesPerSector,
  NumberOfFreeClusters,
  TotalNumberOfClusters   : Cardinal;
begin
  Result := GetDiskFreeSpace(PChar(ADriveLetter+':\'),
                              SectorsPerCluster,
                              BytesPerSector,
                              NumberOfFreeClusters,
                              TotalNumberOfClusters);
end;
//Вывести все файлы директории
procedure ListFileDir(Path: string);
 var
   SR: TSearchRec;
 begin
   if FindFirst(Path + '*.*', faAnyFile, SR) = 0 then
   begin
     repeat
       if (SR.Attr <> faDirectory) then
       begin
       FileList.Add(Path+SR.Name);
       end;
     until FindNext(SR) <> 0;
     FindClose(SR);
   end;
 end;






procedure TForm1.BitBtn1Click(Sender: TObject);
var
CDROM:Char;
PathCD:String;
begin
ListBox1.MultiSelect := true;
CDROM:=GetFirstCDROM;
PathCD:=CDROM+':\';
if NOT DiskInDrive(CDROM) then
begin
ShowMessage('Вставьте диск в дисковод '+PathCD);
exit;
end;

  ListBox1.Clear;
  FileList:=TStringList.Create;
  ListFileDir(PathCD);
  ListBox1.Items:=FileList;
  ListBox1.ItemIndex:=0;
  cdaDisk:=true;
end;

procedure TForm1.BitBtn2Click(Sender: TObject);
begin
if OpenDialog1.Execute then
ListBox1.Items.LoadFromFile(OpenDialog1.FileName);
cdaDisk:=false;
end;

procedure TForm1.BitBtn3Click(Sender: TObject);
begin
  if ListBox1.Items.Count=0 then Exit;

  if SaveDialog1.Execute then
ListBox1.Items.SaveToFile(SaveDialog1.FileName);
end;

procedure TForm1.Button1Click(Sender: TObject); {добавление файлов в плейлист}
begin
OpenDialog1.Options:=[ofAllowMultiSelect]; //***разрешаем мультиселект
if opendialog1.Execute then //***что бы не вызывать ошибку при нажатии отмены
  begin
    listbox1.Items.AddStrings(opendialog1.Files);
    //***автоматически выделяем последний файл в списке
    ListBox1.Selected[ListBox1.Items.Count-1]:=true;
  end;
  cdaDisk:=false;
end;

procedure TForm1.Button3Click(Sender: TObject);
begin
ListBox1.DeleteSelected;
end;

procedure TForm1.ListBox1DblClick(Sender: TObject); //воспроизведение по двойному клику
begin
  try
StopClick(Self);
  except
end;

PlayClick(Self);
end;

procedure TForm1.Timer1Timer(Sender: TObject);
var
  Len,Pos:integer;
  Trk, Min, Sec: word;
  Min1, Sec1:integer; // Трек и его длительность (мин., сек.)
begin
  if TrackBar2.Max<>0 then
  begin

    if not cdaDisk then
    TrackBar2.Position := Mediaplayer1.Position //приравниваем текущую позицию трекбара к текущей позиции трэка
    else
    begin
    LabelSec.Visible :=false;
    LabelMin.Visible :=false;
      mediaplayer1.TimeFormat:=tfTMSF;
      Trk:= MCI_TMSF_TRACK(Mediaplayer1.Position);
      Min:= MCI_TMSF_MINUTE(Mediaplayer1.Position);
      Sec:= MCI_TMSF_SECOND(Mediaplayer1.Position);
      TrackBar2.Position:=Min * 60 + Sec;
      caption:='№ ' +inttostr(Trk)+ ' min '+inttostr(min)+' sec '+inttostr(sec);
    end;

//***вычесляем время
if not cdaDisk then
    Pos := Mediaplayer1.Position;
    Min1 := (Pos div 1000) div 60;
    Sec1 := (Pos div 1000) mod 60;

//***прошло
LabelSec.Visible :=true;
LabelMin.Visible :=true;
   if Sec < 10 then
      labelSec.Caption := IntToStr(Sec1)
    else
      labelSec.Caption := IntToStr(Sec1);
    if Min < 10 then
      labelMin.Caption := IntToStr(Min1)+':'
    else
      labelMin.Caption := IntToStr(Min1)+':';
  end;
end;

procedure TForm1.PlayClick(Sender: TObject);
var
  fn: string;
  len, max: integer;
begin
  if ListBox1.Count>0 then
    begin
      if mediaplayer1.Mode=mpPlaying then
      mediaplayer1.Stop;
      fn:=listbox1.Items.Strings[listbox1.itemindex];
      mediaplayer1.FileName:=fn;
      GetTagMp3;
      mediaplayer1.Open;
      TrackBar2.Max:=mediaplayer1.Length;
      Timer1.Enabled:=true;

      //если cda  - перключаем трек на нужный
      if pos('.cda',fn)<>0 then
      begin
        mediaplayer1.TimeFormat:=tfMSF;
        len:=mediaplayer1.TrackLength[listbox1.itemindex];
        mediaplayer1.Position:=Len;
        mediaplayer1.TimeFormat:=tfTMSF;
        Len:=Mediaplayer1.TrackLength[MCI_TMSF_TRACK(Mediaplayer1.Position)];
        Max:= MCI_MSF_MINUTE ( Len ) * 60 + MCI_MSF_SECOND ( Len );
        TrackBar2.Max:=max div 2;
      end;

      Timer1.Enabled:=true;

      mediaplayer1.Play;
    end
  else ShowMessage('Плэйлист пустой!');
end;



procedure TForm1.StopClick(Sender: TObject);
begin

  if (ListBox1.Count>0)  then
    begin
    TrackBar2.Max:=TrackBar2.Min;
      mediaplayer1.Stop;
    end;
end;






procedure TForm1.TrackBar2Change(Sender: TObject);
begin
  if (ABS(mediaplayer1.Position - TrackBar2.Position) > 1000)and(not cdaDisk) then
  begin
    If TrackBar2.Position<>mediaplayer1.Position then mediaplayer1.Position:=TrackBar2.Position;
    mediaplayer1.Play;
  end;
end;

procedure TForm1.PauseClick(Sender: TObject);
begin
  if ListBox1.Count>0 then
    begin
      Mediaplayer1.Pause;
    end;
end;
//***Переход на следующий трек
procedure TForm1.MediaPlayer1Notify(Sender: TObject);
begin
  with MediaPlayer1 do
    if NotifyValue = nvSuccessful then //***если конец песни
      begin
        Notify := True;
        with ListBox1 do
          if ItemIndex<Items.Count-1 then//***если не последняя песня
            begin
              Selected[ItemIndex+1]:=true;//***выделяем следующий трек
              Notify:=False;
              PlayClick(self);
            end;
      end;
end;




procedure TForm1.FormClose(Sender: TObject; var Action: TCloseAction);
begin
try
StopClick(Self);
except
end;
end;
procedure TForm1.FormCreate(Sender: TObject);
begin
Memo1.Text:='...';
end;
end.
