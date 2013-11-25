unit U_child;

interface

uses
  Windows, Messages, SysUtils, Variants, Classes, Graphics, Controls, Forms,
  Dialogs, sSkinProvider, ExtCtrls, acImage, jpeg, Clipbrd, TeeProcs,
  TeEngine, Chart, pngimage;

type
  TF_child = class(TForm)
    sknprvdr1: TsSkinProvider;
    img_content: TImage;
    procedure FormClose(Sender: TObject; var Action: TCloseAction);
    procedure LoadImage(fileName:String);
    procedure bmp2jpeg(FromFileName,toFileName:string);
    procedure jpeg2bmp(FromFileName,toFileName:string);
    procedure bmp2emf(FromFileName,toFileName:string; enhanced:Boolean);
    procedure emf2bmp(FromFileName,toFileName:string);
    procedure bmp2ico(FromFileName,toFileName:string);
    procedure ico2bmp(FromFileName,toFileName:string);
    procedure bmp2png(FromFileName,toFileName:string);
    procedure png2bmp(FromFileName,toFileName:string);
    function BitmapToRTF(pict: TBitmap): string;
    procedure bmp2rtf(FromFileName,toFileName:string);
  private
    { Private declarations }
  public
    { Public declarations }
  end;

var
  F_child: TF_child;

implementation

{$R *.dfm}

function TF_child.BitmapToRTF(pict: TBitmap): string;
var 
  bi, bb, rtf: string ; 
  bis, bbs: Cardinal; 
  achar: ShortString; 
  hexpict: string ; 
  I: Integer; 
begin
  //Returns the size of the info header and of the image for a device independent bitmap.
  //GetDIBSizes(Bitmap: HBITMAP; var InfoHeaderSize: DWORD; var ImageSize: DWORD);
  GetDIBSizes(pict.Handle, bis, bbs);
  SetLength(bi, bis);
  SetLength(bb, bbs);
  //Returns the info header and image for a device independent bitmap.
  //GetDIB(Bitmap: HBITMAP; Palette: HPALETTE; var BitmapInfo; var Bits): Boolean;
  GetDIB(pict.Handle, pict.Palette, PChar(bi)^, PChar(bb)^);
  rtf := '{\rtf1 {\pict\dibitmap0 ' ;
  SetLength(hexpict, (Length(bb) + Length(bi)) * 2 ); 
  I := 2 ; 
  for bis := 1 to Length(bi) do 
  begin 
    //IntToHex converts a number into a string containing the number's hexadecimal (base 16) representation.
    //Value is the number to convert. Digits indicates the minimum number of hexadecimal digits to return.
    // function IntToHex(Value: Integer; Digits: Integer):
    achar := IntToHex(Integer(bi[bis]), 2 );
    hexpict[I - 1] := achar[ 1 ]; 
    hexpict[I] := achar[ 2 ]; 
    Inc(I, 2 ); 
  end ; 
  for bbs := 1 to Length(bb) do 
  begin 
    achar := IntToHex(Integer(bb[bbs]), 2 ); 
    hexpict[I - 1] := achar[ 1 ]; 
    hexpict[I] := achar[ 2 ]; 
    Inc(I, 2); 
  end ; 
  rtf := rtf + hexpict + ' }}'; 
  Result := rtf;

end;

procedure TF_child.bmp2emf(FromFileName, toFileName: string;enhanced:Boolean);
var
  Metafile: TMetafile;
  MetaCanvas: TMetafileCanvas;
  Bitmap: TBitmap;
begin
  Metafile := TMetaFile.Create;
  try
    Bitmap := TBitmap.Create;
    try
      Bitmap.LoadFromFile(FromFileName);
      Metafile.Height := Bitmap.Height;
      Metafile.Width := Bitmap.Width;
      MetaCanvas := TMetafileCanvas.Create(Metafile, 0);
      try
        //Renders the graphic specified by the Graphic parameter on the canvas at the
       // location given by the coordinates (X, Y).
      //procedure Draw(X, Y: Integer; Graphic: TGraphic);
        MetaCanvas.Draw(0, 0, Bitmap);
      finally
        MetaCanvas.Free;
      end;
    finally
      Bitmap.Free;
    end;
    if enhanced  then
      Metafile.SaveToFile(toFileName+ '.emf')
    else
       Metafile.SaveToFile(toFileName+ '.wmf');
  finally
    Metafile.Free;
  end;
end;

procedure TF_child.bmp2ico(FromFileName, toFileName: string);
var   IconInfo : TIconInfo;
      Icon : TIcon;
      BMP: TBitMap;
      BMP2: TBitmap;
begin
 Bmp:=TBitmap.Create;
 BMP.LoadFromFile(FromFileName);
 BMP2:=TBitmap.Create;
 BMP2.width:=32;
 BMP2.height :=32;
 //The SetStretchBltMode function sets the bitmap stretching mode in the specified device context.
 //HALFTONE - Maps pixels from the source rectangle into blocks of pixels in the destination rectangle.
 //The average color over the destination block of pixels approximates the color of the source pixels
 SetStretchBltMode(bmp.Canvas.Handle, HALFTONE);
//The StretchBlt function copies a bitmap from a source rectangle into a destination rectangle, stretching or compressing the bitmap
//to fit the dimensions of the destination rectangle, if necessary. The system stretches or
//compresses the bitmap according to the stretching mode currently set in the destination device context.
 StretchBlt(bmp2.Canvas.Handle, 0, 0, bmp2.Width, bmp2.Height, bmp.Canvas.Handle, 0, 0, bmp.Width, bmp.Height, SRCCOPY);
 Icon := TIcon.Create;
 icon.Width:=bmp2.Width;
 icon.Height:=bmp2.Height;
 {ICONINFO structure
 Contains information about an icon or a cursor.
 fIcon - Type: BOOL - Specifies whether this structure defines an icon or a cursor.
 A value of TRUE specifies an icon; FALSE specifies a cursor.
 xHotspot - Type: DWORD - The x-coordinate of a cursor's hot spot. If this structure defines an icon,
 the hot spot is always in the center of the icon, and this member is ignored.
 yHotspot - Type: DWORD - The y-coordinate of the cursor's hot spot. If this structure defines an icon,
 the hot spot is always in the center of the icon, and this member is ignored.
 hbmMask - Tpe: HBITMAP - The icon bitmask bitmap. If this structure defines a black and white icon,
 this bitmask is formatted so that the upper half is the icon AND bitmask and the lower half is the
 icon XOR bitmask. Under this condition, the height should be an even multiple of two. If this
 structure defines a color icon, this mask only defines the AND bitmask of the icon.
 hbmColor - Type: HBITMAP - A handle to the icon color bitmap. This member can be optional if this
 structure defines a black and white icon. The AND bitmask of hbmMask is applied with the SRCAND flag
 to the destination; subsequently, the color bitmap is applied (using XOR) to the destination by
 using the SRCINVERT flag }
 IconInfo.fIcon := true;
 IconInfo.xHotspot := 0 ;
 IconInfo.yHotspot := 0 ;
 IconInfo.hbmMask := bmp2.Handle;
 IconInfo.hbmColor := bmp2.Handle;
 Icon.Handle := CreateIconIndirect(IconInfo);
 Icon.SaveToFile(toFileName+ '.ico');
 Icon.Free;
end;

procedure TF_child.bmp2jpeg(fromFileName,toFileName: string);
var
  JPEG: TJPEGImage;
  Bitmap: TBitmap;
begin
  JPEG := TJPEGImage.Create;
  Bitmap := TBitmap.Create;
  try
    Bitmap.LoadFromFile(FromFileName);
    JPEG.Assign(Bitmap);
    JPEG.SaveToFile(toFileName+'.jpeg');
  finally
    JPEG.Free;
    Bitmap.Free;
  end;
end;

procedure TF_child.bmp2png(FromFileName, toFileName: string);
var
png: TPNGObject;
bmp: tbitmap;
begin
  bmp := tbitmap.create;
  try
  bmp.loadfromfile(FromFileName);
  png := TPNGObject.create;
  try
    png.assign(bmp);
    png.savetofile(toFileName+'.png');
  finally
    png.free
  end;
 finally
  bmp.free
 end;
end;

procedure TF_child.bmp2rtf(FromFileName, toFileName: string);
var F:TextFile;
    bmp:TBitmap;
begin
 AssignFile(F,toFileName+'.rtf');
 Rewrite(F);
 bmp:= TBitmap.Create;
 bmp.LoadFromFile(FromFileName);
 Write(F,BitmapToRTF(bmp));
 CloseFile(F);

end;

procedure TF_child.emf2bmp(FromFileName, toFileName: string);
 var
 bmp:TBitmap;
 MetaFile:TMetafile;
begin
   try
    MetaFile:=TMetafile.Create;
    bmp:=TBitmap.Create;
    MetaFile.LoadFromFile(FromFileName);
    bmp.Height:=MetaFile.Height;
    bmp.Width:=MetaFile.Width;
    bmp.Canvas.Draw(0,0,MetaFile);
    bmp.SaveToFile(toFileName+'.bmp');
    bmp.Free;
    MetaFile.Free;
   except
    on e:Exception do
     begin
      bmp.Free;
      MetaFile.Free;
      ShowMessage(e.Message);
     end;
   end;
end;

procedure TF_child.FormClose(Sender: TObject; var Action: TCloseAction);
begin
  //Delete form object
  Action:= caFree;
end;

procedure TF_child.ico2bmp(FromFileName, toFileName: string);
var
   Icon : TIcon;
   Bitmap : TBitmap;
begin
   Icon := TIcon.Create;
   Bitmap := TBitmap.Create;
   Icon.LoadFromFile(FromFileName) ;
   Bitmap.Width := Icon.Width;
   Bitmap.Height := Icon.Height;
   Bitmap.Canvas.Draw(0, 0, Icon ) ;
   Bitmap.SaveToFile(toFileName+'.bmp') ;
   Icon.Free;
   Bitmap.Free;
end;

procedure TF_child.jpeg2bmp(FromFileName, toFileName: string);
  var 
  jpeg: TJPEGImage; 
  bmp:  TBitmap; 
begin 
  jpeg := TJPEGImage.Create; 
  try 
    jpeg.CompressionQuality := 100; {Default Value} 
    jpeg.LoadFromFile(FromFileName);
    bmp := TBitmap.Create; 
    try 
      bmp.Assign(jpeg); 
      bmp.SaveTofile(toFileName+ '.bmp'); 
    finally 
      bmp.Free 
    end; 
  finally 
    jpeg.Free 
  end;
end;

procedure TF_child.LoadImage(fileName:string);
begin
  img_content.Picture.LoadFromFile(fileName);
end;

procedure TF_child.png2bmp(FromFileName, toFileName: string);
var
 png: TPNGObject;
 bmp: tbitmap;
begin
 png := TPNGObject.create;
 try
  png.loadfromfile(FromFileName);
  bmp := tbitmap.create;
  try
    bmp.assign(png);
    bmp.savetofile(toFileName+'.bmp');
  finally
    bmp.free
  end;
 finally
  png.free
 end;
end;

end.
